const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (local instance) for pointmate (login/signup)
mongoose.connect('mongodb://localhost:27017/pointmate')
  .then(() => console.log('Connected to MongoDB (pointmate)'))
  .catch(err => console.error('MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});
const User = mongoose.model('User', UserSchema);

// Profile schema in pointmate database
const ProfileSchema = new mongoose.Schema({
  email_login: { type: String, unique: true, required: true }, // login email
  name: String,
  email: String,
  college: String,
  studentId: String,
  year: String,
  branch: String,
  semester: String,
  graduationYear: String,
  address: String,
  phone: String,
  aictePoints: { type: Number, default: 0 }  // Add AICTE points field with default value
});
const Profile = mongoose.model('Profile', ProfileSchema);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend server is running' });
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });
    user = new User({ name, email, password });
    await user.save();
    res.json({ 
      message: 'Signup successful', 
      name, 
      email,
      isAuthenticated: true 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User does not exist. Please sign up first.' });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password.' });
    }
    res.json({ 
      message: 'Login successful', 
      ...user.toObject(),
      isAuthenticated: true 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile endpoint (only name and password allowed)
app.post('/api/update-profile', async (req, res) => {
  const { email, name, password } = req.body;
  const updates = {};
  if (name) updates.name = name;
  if (password) updates.password = password;
  try {
    const user = await User.findOneAndUpdate({ email }, updates, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json({ message: 'Profile updated successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get student profile from pointmate database
app.get('/api/pointmate/profile/get', async (req, res) => {
  const { email_login } = req.query;
  try {
    const profile = await Profile.findOne({ email_login });
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update student profile in pointmate database
app.post('/api/pointmate/profile/update', async (req, res) => {
  const { email_login, ...profileFields } = req.body;
  try {
    // Ensure aictePoints is a number
    if (profileFields.aictePoints !== undefined) {
      profileFields.aictePoints = Number(profileFields.aictePoints);
    }

    const profile = await Profile.findOneAndUpdate(
      { email_login },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json({ message: 'Profile updated successfully', profile });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Migration endpoint to add aictePoints to existing profiles
app.post('/api/pointmate/migrate-aicte-points', async (req, res) => {
  try {
    const result = await Profile.updateMany(
      { aictePoints: { $exists: false } },  // Find documents where aictePoints doesn't exist
      { $set: { aictePoints: 0 } }          // Set aictePoints to 0
    );
    console.log('Migration result:', result);
    res.json({ 
      message: 'Migration completed successfully', 
      modifiedCount: result.modifiedCount 
    });
  } catch (err) {
    console.error('Migration error:', err);
    res.status(500).json({ message: 'Migration failed' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`)); 
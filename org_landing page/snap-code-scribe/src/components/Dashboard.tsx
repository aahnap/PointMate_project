import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const eventData = [
  {
    id: '1',
    title: 'Web Development Workshop',
    description: 'Learn the fundamentals of modern web development with React and Node.js.',
    date: 'Jun 15, 2025',
    location: 'Main Campus, Building A',
    domain: 'Technical Skills',
    points: 15,
    poster: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    by: 'IEEE VTU Student Branch',
  },
  {
    id: '2',
    title: 'Leadership Development Program',
    description: 'Develop essential leadership and management skills for your career.',
    date: 'Jun 20, 2025',
    location: 'E-Block Auditorium',
    domain: 'Soft Skills',
    points: 10,
    poster: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    by: 'Management Club',
  },
  {
    id: '3',
    title: 'Campus Cleanup Drive',
    description: 'Join us in making our campus cleaner and greener.',
    date: 'Jun 18, 2025',
    location: 'Campus Grounds',
    domain: 'Community Service',
    points: 8,
    poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    by: 'Eco Club',
  },
];

const Dashboard: React.FC = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    domain: 'Technical Skills',
    points: 5,
    poster: '',
    start: '',
    end: '',
    location: '',
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-1">Organization Dashboard</h1>
      <p className="text-gray-500 mb-8">Manage your events and track participant registrations</p>
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-lg font-semibold mb-4">Create New Event</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Event Information</h3>
            <input type="text" placeholder="Event Title" className="w-full border rounded px-3 py-2 mb-3" />
            <textarea placeholder="Description" className="w-full border rounded px-3 py-2 mb-3" rows={3} />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Domain</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>Technical Skills</option>
                  <option>Soft Skills</option>
                  <option>Community Service</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">AICTE Points</label>
                <input type="number" min={1} className="w-full border rounded px-3 py-2" defaultValue={5} />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Event Media</h3>
            <input type="url" placeholder="https://example.com/poster.jpg" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Date and Location</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Start Date and Time</label>
                <input type="datetime-local" className="w-full border rounded px-3 py-2" />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">End Date and Time</label>
                <input type="datetime-local" className="w-full border rounded px-3 py-2" />
              </div>
            </div>
            <input type="text" placeholder="Location" className="w-full border rounded px-3 py-2 mt-3" />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold flex items-center gap-2 hover:bg-blue-700 transition">
              Create Event
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb" opacity=".15"/><path d="M12 8v8m0 0l-3-3m3 3l3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">Your Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventData.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img src={event.poster} alt={event.title} className="rounded-lg h-36 w-full object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${event.domain === 'Technical Skills' ? 'bg-blue-100 text-blue-700' : event.domain === 'Soft Skills' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>{event.domain}</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">{event.points} Points</span>
            </div>
            <h3 className="text-lg font-bold mb-1">{event.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{event.description}</p>
            <div className="flex items-center text-gray-500 text-sm mb-1 gap-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M16 2v2M8 2v2M3 7h18M5 11v6a2 2 0 002 2h10a2 2 0 002-2v-6"/><rect width="18" height="13" x="3" y="7" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
              {event.date}
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-2 gap-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>
              {event.location}
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="text-xs text-gray-400">By {event.by}</span>
              <Link to={`/event/${event.id}`} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition text-sm font-medium">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
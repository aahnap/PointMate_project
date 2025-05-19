import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const eventData = [
  {
    id: '1',
    title: 'Web Development Workshop',
    description: 'Learn the fundamentals of modern web development with React and Node.js.',
    date: 'Sunday, June 15, 2025',
    time: '09:00 AM - 05:00 PM',
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
    date: 'Friday, June 20, 2025',
    time: '10:00 AM - 04:00 PM',
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
    date: 'Wednesday, June 18, 2025',
    time: '08:00 AM - 12:00 PM',
    location: 'Campus Grounds',
    domain: 'Community Service',
    points: 8,
    poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    by: 'Eco Club',
  },
];

const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventData.find(e => e.id === eventId) || eventData[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow overflow-hidden mb-8">
        <img src={event.poster} alt={event.title} className="w-full h-64 object-cover" />
        <div className="p-6 pb-0">
          <div className="flex gap-2 mb-2">
            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${event.domain === 'Technical Skills' ? 'bg-blue-100 text-blue-700' : event.domain === 'Soft Skills' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>{event.domain}</span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">{event.points} AICTE Points</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">{event.title}</h1>
          <p className="text-gray-600 mb-2">By {event.by}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: About and AICTE info */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">About this event</h2>
          <p className="text-gray-700 mb-6">{event.description}</p>
          <h2 className="text-lg font-semibold mb-2">AICTE Points Information</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 mb-8">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="mt-1"><circle cx="12" cy="12" r="10" fill="#2563eb" opacity=".15"/><path d="M12 8v4m0 4h.01" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div>
              <div className="font-semibold text-blue-800 mb-1">Earn {event.points} AICTE Points</div>
              <div className="text-sm text-blue-900">Participating in this event will count towards your AICTE points requirement. This event falls under the <span className="font-semibold underline cursor-pointer">{event.domain}</span> domain.</div>
            </div>
          </div>
        </div>
        {/* Right: Event Details */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-gray-50 rounded-lg p-5 mb-6 border">
            <h3 className="font-semibold mb-3">Event Details</h3>
            <div className="mb-2 flex items-center gap-2 text-gray-700 text-sm">
              <Calendar className="h-4 w-4" />
              <span><b>Date</b><br/>{event.date}</span>
            </div>
            <div className="mb-2 flex items-center gap-2 text-gray-700 text-sm">
              <Calendar className="h-4 w-4" />
              <span><b>Time</b><br/>{event.time}</span>
            </div>
            <div className="mb-2 flex items-center gap-2 text-gray-700 text-sm">
              <MapPin className="h-4 w-4" />
              <span><b>Location</b><br/>{event.location}</span>
            </div>
            <div className="mb-2 flex items-center gap-2 text-gray-700 text-sm">
              <User className="h-4 w-4" />
              <span><b>Organized by</b><br/>{event.by}</span>
            </div>
            <Button className="w-full mt-4 bg-blue-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
              Register for Event
            </Button>
            <Button variant="outline" className="w-full mt-2 flex items-center justify-center gap-2">
              <Share2 className="h-4 w-4" /> Share Event
            </Button>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 border">
            <h3 className="font-semibold mb-3">Event Location</h3>
            <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              <span>Event location map</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails; 
import React from 'react';
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

const Events: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">All Registered Events</h1>
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

export default Events; 
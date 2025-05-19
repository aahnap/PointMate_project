import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Award, Search, ChevronDown } from 'lucide-react';
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

const domains = ['All Events', 'Technical Skills', 'Soft Skills', 'Community Service'];

const Events = () => {
  const [search, setSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All Events');
  const [filterDropdown, setFilterDropdown] = useState(false);

  const filteredEvents = eventData.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase()) ||
      event.by.toLowerCase().includes(search.toLowerCase());
    const matchesDomain =
      selectedDomain === 'All Events' || event.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="min-h-screen bg-[#f7fafd] py-10 px-2 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-1">Events</h1>
      <p className="text-gray-500 mb-6">Browse and register for events to earn AICTE points</p>
      <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1 flex items-center gap-2">
          <Search className="text-gray-400 h-5 w-5 ml-2" />
          <input
            type="text"
            placeholder="Search events by title, description, or organization..."
            className="w-full border-none outline-none bg-transparent px-2 py-2 text-gray-700"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="relative min-w-[200px]">
          <button
            className="w-full flex items-center justify-between border rounded px-3 py-2 bg-white text-gray-700"
            onClick={() => setFilterDropdown(v => !v)}
          >
            Filter by Domain
            <span className="ml-2 text-gray-500 flex items-center">
              {selectedDomain === 'All Events' ? 'All Domains' : selectedDomain}
              <ChevronDown className="ml-1 h-4 w-4" />
            </span>
          </button>
          {filterDropdown && (
            <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow">
              {domains.map(domain => (
                <div
                  key={domain}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${selectedDomain === domain ? 'bg-blue-100 font-semibold' : ''}`}
                  onClick={() => { setSelectedDomain(domain); setFilterDropdown(false); }}
                >
                  {domain}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {domains.map(domain => (
          <button
            key={domain}
            className={`flex items-center gap-2 px-5 py-2 rounded font-semibold border transition ${selectedDomain === domain ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50'}`}
            onClick={() => setSelectedDomain(domain)}
          >
            {domain === 'All Events' && <Award className="h-5 w-5" />}
            {domain === 'Technical Skills' && <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">Technical Skills</span>}
            {domain === 'Soft Skills' && <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-semibold">Soft Skills</span>}
            {domain === 'Community Service' && <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">Community Service</span>}
            {domain === 'All Events' && 'All Events'}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img src={event.poster} alt={event.title} className="rounded-lg h-36 w-full object-cover mb-4" />
            <div className="flex gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${event.domain === 'Technical Skills' ? 'bg-blue-100 text-blue-700' : event.domain === 'Soft Skills' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>{event.domain}</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">{event.points} Points</span>
            </div>
            <h3 className="text-lg font-bold mb-1">{event.title}</h3>
            <p className="text-gray-600 mb-2 text-sm">{event.description}</p>
            <div className="flex items-center text-gray-500 text-sm mb-1 gap-2">
              <Calendar className="h-4 w-4" />
              {event.date}
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-2 gap-2">
              <MapPin className="h-4 w-4" />
              {event.location}
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="text-xs text-gray-400">By {event.by}</span>
              <Link to={`/events/${event.id}`} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition text-sm font-medium">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events; 
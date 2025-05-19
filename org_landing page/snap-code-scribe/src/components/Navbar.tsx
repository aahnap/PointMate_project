import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Close popover on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <nav className="w-full bg-white shadow-sm py-2 px-6 flex items-center justify-between">
      <div className="flex items-center justify-center h-full gap-2 select-none">
        {/* Graduation cap logo and PointMate name */}
        <span className="text-blue-600 flex items-center">
          <svg width="28" height="28" fill="none" viewBox="0 0 32 32">
            <path d="M3 16L16 8l13 8" stroke="#2563eb" strokeWidth="2.3"/>
            <path d="M6 18.5L3 16V25a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V16l-3 2.5" stroke="#2563eb" strokeWidth="2.3"/>
            <path d="M23.5 19v2.5a7.5 7.5 0 01-15 0V19" stroke="#2563eb" strokeWidth="2.3"/>
          </svg>
        </span>
        <span className="text-2xl font-extrabold flex items-end leading-none">
          <span className="text-black">Point</span>
          <span className="text-blue-600">Mate</span>
        </span>
      </div>
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M3 10.5L12 5l9 5.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V10.5z"/></svg>
          Home
        </Link>
        <Link to="/events" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M16 3v4M8 3v4"/><path stroke="currentColor" strokeWidth="2" d="M3 11h18"/></svg>
          Events
        </Link>
        <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="18" height="12" x="3" y="7" rx="2" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M3 11h18"/><rect width="4" height="4" x="10" y="3" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
          Dashboard
        </Link>
      </div>
      <div className="flex items-center gap-5">
        {/* Notification bell */}
        <button className="relative" aria-label="notifications">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V11c0-3.31-2.69-6-6-6S6 7.69 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </button>
        {/* Avatar & Dropdown (unchanged) */}
        <div className="relative" ref={avatarRef}>
          <button className="flex items-center gap-2 focus:outline-none" onClick={() => setOpen((v) => !v)} aria-label="open user menu">
            <span className="inline-block w-8 h-8 rounded-full bg-gray-200">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="mx-auto my-0.5">
                <circle cx="12" cy="8.5" r="4" fill="#d1d5db"/>
                <ellipse cx="12" cy="17" rx="7" ry="4" fill="#d1d5db"/>
              </svg>
            </span>
            <span className="text-sm text-blue-700 font-medium">dsce</span>
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white border shadow rounded-lg z-20 py-1 animate-fade-in">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setOpen(false); alert('Profile settings not implemented.'); }}>Profile Settings</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setOpen(false); alert('Logging out (demo)'); }}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

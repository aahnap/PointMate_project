import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components (to be created)
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard.tsx";
import EventDetails from "./components/EventDetails";
import Events from "./components/Events";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-[#fafbfc] min-h-screen pt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

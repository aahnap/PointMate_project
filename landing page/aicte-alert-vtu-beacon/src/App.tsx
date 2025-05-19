import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import AictePointsTracker from "./pages/AictePointsTracker";
import Help from "./pages/Help";
import Certificates from './pages/Certificates';
import ActivityLog from './pages/ActivityLog';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import { useEffect } from 'react';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Check for user data in URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get('user');
    
    if (userParam) {
      try {
        const userData = JSON.parse(decodeURIComponent(userParam));
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        // Remove the parameter from URL without refreshing
        window.history.replaceState({}, document.title, window.location.pathname);
        // Force a re-render to update the UI
        window.dispatchEvent(new Event('storage'));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/aicte-points-tracker" element={<AictePointsTracker />} />
            <Route path="/help" element={<Help />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/activity-log" element={<ActivityLog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

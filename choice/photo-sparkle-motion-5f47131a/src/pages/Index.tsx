import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Calendar, Filter, User, MapPin, Users } from 'lucide-react';
//import Logo from "@/components/Logo"; // Removed problematic import
// Replaced with a simple placeholder or a relative path if you have it.
const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Index = () => {
  const navigate = useNavigate();

  const handlePathSelection = (path: string) => {
    if (path === "Student") {
      window.location.href = "http://localhost:3001/login/index.html";
    } else if (path === "Organization") {
      window.location.href = "http://localhost:3001/org_login/aictee.html";
    }
  };

  const handleGetStarted = () => {
    const featuresSection = document.getElementById('student-org-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const pointCategories = [
    {
      domain: 'Technical Skills',
      icon: <Filter className="h-6 w-6 text-blue-600" />,
      description: 'Workshops, coding competitions, hackathons, and technical training sessions.'
    },
    {
      domain: 'Soft Skills',
      icon: <Users className="h-6 w-6 text-purple-600" />,
      description: 'Leadership programs, communication workshops, personal development seminars.'
    },
    {
      domain: 'Community Service',
      icon: <User className="h-6 w-6 text-green-600" />,
      description: 'Volunteering, social initiatives, environmental activities, and outreach programs.'
    },
    {
      domain: 'Innovation & Entrepreneurship',
      icon: <Calendar className="h-6 w-6 text-orange-600" />,
      description: 'Startup competitions, innovation challenges, business idea pitches, entrepreneurship workshops.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 text-center lg:pt-32 lg:pb-40">
         
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Track Your AICTE Points Journey
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            Participate in campus activities, workshops, and events to earn points required for your graduation. Monitor your progress and never miss an opportunity.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-3250dc ml-4 text-white border-white hover:bg-blue-400"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-3250dc ml-4 text-white border-white hover:bg-blue-400"
              onClick={() => navigate('/events')}
            >
              Browse Events
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </div>

      {/* Points requirement section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How AICTE Points Work
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Students need a minimum of 100 points to graduate. Points can be earned across various domains through participation in different activities.
          </p>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-gray-50 py-16" id="features-section">

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pointCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center items-center w-12 h-12 rounded-md bg-gray-100 mx-auto">
                {category.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{category.domain}</h3>
              <p className="mt-2 text-sm text-gray-500 text-center">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" id="student-org-section">
              Features For Everyone
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Student features */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <User className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">For Students</h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Award className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Track your points progress</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Calendar className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Discover and register for upcoming events</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Filter className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Filter events by domain and points value</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <MapPin className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Find events near your location</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4">
                  <Button
                    variant='outline'
                    size="lg"
                    onClick={() => handlePathSelection('Student')}
                  >
                    Sign Up as Student
                  </Button>
                </div>
              </div>

              {/* Organization features */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">For Organizations</h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Calendar className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Create and manage events</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Filter className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Set points requirements for activities</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <MapPin className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Track participant attendance</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Award className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Generate reports and analytics</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4">
                  <Button
                    variant='outline'
                    size='lg'
                    onClick={() => handlePathSelection('Organization')}
                  >
                    Register as Organization
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-400 text-sm">
                AICTE Points Tracking System helps students track their graduation points through various campus activities and events.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/register" className="text-gray-400 hover:text-white transition-colors">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-gray-400 hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">
                  Email: support@aictepoints.com
                </li>
                <li className="text-gray-400 text-sm">
                  Phone: +91 123 456 7890
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 1.705-4.92 3.937 0 .311.045.562.127.804-2.772.643-3.366-1.337-3.366-1.337-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832-.023-.647-.27-1.042-.522-1.34C3.242 5.409 2.5 4.464 2.5 3.14 2.5 1.465 4.035.8 5.667.8c1.669 0 2.586 1.227 2.555 1.865.483-.04 1.122-.148 1.122-.652 0-.432-.172-.76-.443-1.057l-.387.005c-.356.005-.717.027-1.057.078-.297.048-.62.16-.873.315.005-.1.009-.204.009-.305 0-.782-.258-1.427-.592-1.958l-.008.008c.416-.125.846-.207 1.293-.207 1.23 0 2.28.845 2.28 1.98v.007c0 1.418-.705 2.613-1.734 3.467.159.02.32.031.481.031.926 0 1.693-.39 2.337-1.207-.024.205-.036.41-.036.618 0 .418.28.748.681 1.048-.257.005-.51.007-.764.007-.193 0-.383-.01-.577-.028.389 1.224.322 2.139.322 2.433 0 .231-.01.443-.02.656.511-.17 1.84-.63 2.301-1.288-.024.204-.036.414-.036.628 0 .905.608 1.668 1.414 1.92-.03.022-.062.042-.093.063-.339.205-.763.328-1.22.328-.826 0-1.59-.345-2.003-.887.063-.205.1-.42.1-.64 0-.418-.338-.75-.75-.75s-.75.332-.75.75c0 .22.037.435.1.64-.413.542-1.177.887-2.003.887-.457 0-.88-.123-1.22-.328-.03-.02-.06-.04-.093-.063C.987 20.31 0 19.105 0 18.195c0-.214.01-.425.036-.628.461.649 1.042 1.288 2.3 1.288.267 0 .524-.01.764-.028-.27.306-.664.54-1.085.616.631.639 1.45.958 2.432.958 1.415 0 2.592-.93 2.592-2.083 0-.205-.008-.405-.02-.616.36-.256.689-.56 1.023-.914-.357.209-.743.354-1.195.42-.352.067-.72.096-1.106.096-.276 0-.55-.028-.81-.082.541-.407 1.038-1.055 1.435-1.719-.489.087-.982.137-1.473.137-.373 0-.74-.04-.104-.12.64-.461 1.256-1.055 1.71-1.71.366-.354.663-.659 1.023-.914C20.844 13.335 23.954 8.814 23.954 4.569z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} AICTE Points Tracking System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React from 'react';
import { Search } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-200">
      <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
               <path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V12C18 12.5523 17.5523 13 17 13H15L12 17L9 13H7C6.44772 13 6 12.5523 6 12V7Z" fill="currentColor"/>
               <path d="M14 13L12 15.5L10 13H14Z" fill="white"/>
            </svg>
            <span className="font-bold text-xl tracking-tight">Mobbin</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Apps</a>
            <a href="#" className="hover:text-black transition-colors">Screens</a>
            <a href="#" className="hover:text-black transition-colors">Flows</a>
            <a href="#" className="hover:text-black transition-colors">UI Elements</a>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-gray-500 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm transition-colors">
            <Search size={16} />
            <span className="opacity-70">Search...</span>
            <span className="ml-2 text-xs border border-gray-300 rounded px-1">⌘K</span>
          </button>
          
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="#" className="hidden lg:block text-gray-600 hover:text-black transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Log in</a>
            <a href="#" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Join for free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
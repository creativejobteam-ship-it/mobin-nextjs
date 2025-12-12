'use client';

import React from 'react';
import { Filter, Smartphone, Monitor } from 'lucide-react';
import { AppCardData } from '../types';

const apps: AppCardData[] = [
  { id: '1', title: 'Revolut', category: 'Finance', screens: 120, imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80' },
  { id: '2', title: 'Airbnb', category: 'Travel', screens: 85, imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=800&q=80' },
  { id: '3', title: 'Headspace', category: 'Health & Fitness', screens: 45, imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Duolingo', category: 'Education', screens: 92, imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop' },
  { id: '5', title: 'Spotify', category: 'Music', screens: 150, imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=800&q=80' },
  { id: '6', title: 'Uber Eats', category: 'Food & Drink', screens: 64, imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' },
  { id: '7', title: 'Robinhood', category: 'Finance', screens: 78, imageUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80' },
  { id: '8', title: 'Instagram', category: 'Social', screens: 200, imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80' },
  { id: '9', title: 'Linear', category: 'Business', screens: 40, imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80' },
  { id: '10', title: 'TikTok', category: 'Social', screens: 180, imageUrl: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80' },
  { id: '11', title: 'Coinbase', category: 'Finance', screens: 55, imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80' },
  { id: '12', title: 'HBO Max', category: 'Entertainment', screens: 110, imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80' },
];

const categories = [
  'Finance', 'Food & Drink', 'Travel', 'Shopping', 'Business', 'Social', 'Education', 'Health', 'Lifestyle', 'Music'
];

export const AppGrid: React.FC = () => {
  return (
    <section className="bg-white min-h-screen border-t border-gray-100">
      {/* Sub-Header / Filter Bar */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-100 px-4 md:px-8 py-3 flex items-center justify-between overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2">
           <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg text-sm font-medium">
             <Smartphone size={16} /> iOS
           </button>
           <button className="flex items-center gap-2 px-3 py-1.5 text-gray-500 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors">
             <Monitor size={16} /> Web
           </button>
           <div className="h-6 w-px bg-gray-200 mx-2"></div>
           <nav className="flex items-center gap-1">
             <button className="px-3 py-1.5 bg-gray-100 text-black font-medium rounded-lg text-sm">Latest</button>
             <button className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 rounded-lg text-sm transition-colors">Most popular</button>
             <button className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 rounded-lg text-sm transition-colors">Top rated</button>
           </nav>
        </div>
        
        <button className="flex items-center gap-2 text-gray-500 hover:text-black text-sm font-medium ml-4">
          <Filter size={16} /> Filter
        </button>
      </div>

      <div className="flex max-w-[1600px] mx-auto">
        {/* Sidebar Categories (Hidden on mobile) */}
        <aside className="hidden lg:block w-64 p-8 sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Categories</h3>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat}>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg text-sm transition-colors">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Grid */}
        <div className="flex-1 p-4 md:p-8">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {apps.map((app) => (
              <div key={app.id} className="group break-inside-avoid relative cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-[9/16] w-full relative">
                    <img 
                      src={app.imageUrl} 
                      alt={app.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                  
                  {/* Hover Overlay Info */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex justify-between items-end">
                     <div>
                       <p className="font-semibold">{app.title}</p>
                       <p className="text-xs text-gray-200">{app.screens} screens</p>
                     </div>
                     <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                     </button>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center p-1">
                      <img src={`https://cdn.simpleicons.org/${app.title.toLowerCase().replace(' ', '')}`} 
                           alt="icon" 
                           className="w-4 h-4 object-contain opacity-70"
                           onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
                      />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{app.title}</span>
                  <span className="text-xs text-gray-400">• {app.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <button className="bg-white border border-gray-200 text-black px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm">
               Load more apps
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};
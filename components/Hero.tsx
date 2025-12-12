'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingIcon = ({ src, className, size = 48 }: { src: string; className: string; size?: number }) => (
  <div className={`absolute p-3 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center ${className}`}>
    <img 
      src={src} 
      alt="brand icon" 
      width={size} 
      height={size} 
      className="w-full h-full object-contain"
      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
    />
  </div>
);

const trustedLogos = [
  { name: 'Uber', src: 'https://cdn.simpleicons.org/uber/000000' },
  { name: 'Headspace', src: 'https://cdn.simpleicons.org/headspace/000000' },
  { name: 'Meta', src: 'https://cdn.simpleicons.org/meta/000000' },
  { name: 'Airbnb', src: 'https://cdn.simpleicons.org/airbnb/000000' },
  { name: 'Revolut', src: 'https://cdn.simpleicons.org/revolut/000000' },
  { name: 'Pinterest', src: 'https://cdn.simpleicons.org/pinterest/000000' },
  { name: 'Spotify', src: 'https://cdn.simpleicons.org/spotify/000000' },
  { name: 'Netflix', src: 'https://cdn.simpleicons.org/netflix/000000' },
];

// Create a sufficiently long list of logos to ensure it fills wide screens
// We duplicate the array 3 times to form one "set", then we will render two of these "sets" for the marquee.
const logoSet = [...trustedLogos, ...trustedLogos, ...trustedLogos];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      
      {/* Floating Logos - Background Layer */}
      {/* Reduced height to 75% to strictly avoid overlap with Trusted By section */}
      <div className="absolute inset-x-0 top-0 h-[75%] max-w-[1600px] mx-auto pointer-events-none select-none px-4">
        {/* Top Center - Shopify */}
        <FloatingIcon 
          src="https://cdn.simpleicons.org/shopify/96bf48" 
          className="top-6 left-1/2 -translate-x-1/2 animate-float w-14 h-14" 
          size={32}
        />
        
        {/* Left Side */}
        <FloatingIcon 
          src="https://cdn.simpleicons.org/slack/4A154B" 
          className="top-24 left-[10%] lg:left-[15%] w-16 h-16 animate-float-delayed" 
          size={32}
        />
        <FloatingIcon 
          src="https://cdn.simpleicons.org/ubereats/06C167" 
          className="top-[55%] left-[5%] lg:left-[8%] w-14 h-14 animate-float-slow" 
          size={28}
        />
        <FloatingIcon 
          src="https://cdn.simpleicons.org/loom/625DF5" 
          className="top-[75%] left-[15%] lg:left-[20%] w-12 h-12 animate-float" 
          size={24}
        />

        {/* Right Side */}
        <FloatingIcon 
          src="https://cdn.simpleicons.org/notion/000000" 
          className="top-20 right-[12%] lg:right-[18%] w-16 h-16 animate-float-slow" 
          size={32}
        />
        <FloatingIcon 
          src="https://cdn.simpleicons.org/airbnb/FF5A5F" 
          className="top-[50%] right-[8%] w-14 h-14 animate-float" 
          size={28}
        />
        <FloatingIcon 
          src="https://cdn.simpleicons.org/headspace/F47D31" 
          className="top-[80%] right-[18%] lg:right-[22%] w-12 h-12 animate-float-delayed" 
          size={24}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 mb-8">
            <span className="text-xs font-semibold bg-gray-200 px-1.5 py-0.5 rounded text-gray-700">New</span>
            <span className="text-sm font-medium text-gray-600">Animations are now available on Mobbin</span>
            <ArrowRight size={14} className="text-gray-500" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
          Discover real-world<br />
          design inspiration.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Featuring over 300,000 screens and 1,000 iOS, Android & Web apps — New content weekly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-gray-200">
            Join for free
          </button>
          <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
            See our plans
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-24 pt-10 border-t border-gray-100 bg-white/60 backdrop-blur-sm rounded-xl">
          <p className="text-sm text-gray-400 font-medium mb-8">Trusted by design teams at</p>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden mask-fade-sides pause-on-hover">
             {/* w-max ensures the flex container doesn't wrap or shrink, fixing the overlapping issue */}
             <div className="flex animate-scroll w-max">
                
                {/* Loop 1 - The first set of logos */}
                <div className="flex items-center gap-24 pr-24">
                  {logoSet.map((logo, idx) => (
                    <img 
                      key={`l1-${idx}`} 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-7 w-auto opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 flex-shrink-0" 
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  ))}
                </div>

                {/* Loop 2 - Identical duplicate for seamless scrolling */}
                <div className="flex items-center gap-24 pr-24">
                  {logoSet.map((logo, idx) => (
                    <img 
                      key={`l2-${idx}`} 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-7 w-auto opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 flex-shrink-0" 
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  ))}
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
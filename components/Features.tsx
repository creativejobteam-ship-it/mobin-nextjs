import React from 'react';

// Custom mini illustrations for each design element
const CardVisual = () => (
    <div className="w-16 h-12 bg-white border border-gray-200 rounded shadow-[0_2px_4px_rgba(0,0,0,0.05)] p-1.5 flex flex-col gap-1.5 group-hover:border-gray-300 transition-colors">
       <div className="w-1/2 h-1.5 bg-gray-200 rounded-full"></div>
       <div className="w-full h-full bg-gray-50 rounded border border-dashed border-gray-200"></div>
    </div>
);

const ButtonVisual = () => (
    <div className="px-4 py-1.5 bg-black text-white rounded-md text-[10px] font-medium shadow-md transform group-hover:scale-105 transition-transform">
        Action
    </div>
);

const ToastVisual = () => (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded-full text-[8px] shadow-lg transform translate-y-1">
       <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
       <span className="opacity-90">Success</span>
    </div>
);

const TabBarVisual = () => (
    <div className="w-20 h-10 bg-gray-50 rounded-lg border border-gray-200 relative overflow-hidden flex flex-col justify-end">
        <div className="h-4 bg-white border-t border-gray-200 w-full flex justify-around items-center px-1">
             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
             <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
             <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
    </div>
);

const BottomSheetVisual = () => (
    <div className="w-16 h-14 bg-gray-100 rounded border border-gray-200 relative overflow-hidden flex flex-col justify-end">
        <div className="h-10 bg-white rounded-t-lg shadow-[0_-2px_4px_rgba(0,0,0,0.05)] w-full flex justify-center pt-1.5 border-t border-gray-100 transition-transform group-hover:translate-y-[-2px]">
             <div className="w-4 h-0.5 bg-gray-300 rounded-full"></div>
        </div>
    </div>
);

const DropdownVisual = () => (
    <div className="flex flex-col items-center gap-1">
        <div className="w-20 h-6 border border-gray-200 bg-white rounded flex items-center justify-between px-2 shadow-sm">
             <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
             <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
        </div>
        <div className="w-20 h-8 border border-gray-100 bg-white rounded shadow-md p-1.5 flex flex-col gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
             <div className="w-full h-1 bg-blue-100 rounded-full"></div>
             <div className="w-2/3 h-1 bg-gray-100 rounded-full"></div>
             <div className="w-1/2 h-1 bg-gray-100 rounded-full"></div>
        </div>
    </div>
);

const IndicatorVisual = () => (
    <div className="flex gap-1.5 items-center justify-center p-2 bg-gray-50 rounded-full border border-gray-100">
       <div className="w-2 h-2 rounded-full bg-black"></div>
       <div className="w-2 h-2 rounded-full bg-gray-300"></div>
       <div className="w-2 h-2 rounded-full bg-gray-300"></div>
    </div>
);

const SidebarVisual = () => (
    <div className="w-20 h-14 bg-white border border-gray-200 rounded flex overflow-hidden shadow-sm">
        <div className="w-6 h-full bg-gray-50 border-r border-gray-100 p-1 flex flex-col gap-1">
             <div className="w-3 h-3 bg-gray-300 rounded mb-1"></div>
             <div className="w-full h-0.5 bg-gray-200 rounded"></div>
             <div className="w-full h-0.5 bg-gray-200 rounded"></div>
        </div>
        <div className="flex-1 p-1.5">
             <div className="w-full h-2 bg-gray-100 rounded mb-1"></div>
             <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
        </div>
    </div>
);

const patternItems = [
    { label: 'Card', visual: <CardVisual /> },
    { label: 'Button', visual: <ButtonVisual /> },
    { label: 'Toast', visual: <ToastVisual /> },
    { label: 'Tab bar', visual: <TabBarVisual /> },
    { label: 'Bottom Sheet', visual: <BottomSheetVisual /> },
    { label: 'Dropdown', visual: <DropdownVisual /> },
    { label: 'Indicator', visual: <IndicatorVisual /> },
    { label: 'Sidebar', visual: <SidebarVisual /> },
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Find design patterns in seconds.</h2>
          <div className="flex justify-center gap-2 mt-8">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">Screens</button>
            <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-400 transition-colors">UI Elements</button>
            <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-400 transition-colors">Flows</button>
          </div>
        </div>

        {/* Feature Grid: UI Elements simulation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
           {patternItems.map((item, idx) => (
             <div key={idx} className="bg-white h-36 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-between p-4 hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1">
                <div className="flex-1 flex items-center justify-center w-full">
                  {item.visual}
                </div>
                <span className="font-medium text-gray-700 text-sm group-hover:text-black">{item.label}</span>
             </div>
           ))}
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10">Explore entire user journeys with flows.</h2>
          <div className="grid md:grid-cols-2 gap-8">
             {/* Video Card */}
             <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
               <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-6 relative group">
                  <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                     <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                     </div>
                  </div>
               </div>
               <h3 className="text-xl font-bold mb-2">Videos</h3>
               <p className="text-gray-500">Experience flows the way they were meant to be experienced, complete with transitions, micro-interactions, and animations.</p>
             </div>

             {/* Prototype Card */}
             <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
               <div className="aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden mb-6 relative p-8 flex items-center justify-center">
                  <div className="relative w-[180px] bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 border-4 border-gray-800">
                     <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" alt="UI" className="w-full h-auto" />
                     <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 bg-blue-500/30 rounded-full animate-ping"></div>
                     <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-blue-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium border border-white/20">
                    Interactive
                  </div>
               </div>
               <h3 className="text-xl font-bold mb-2">Prototype mode</h3>
               <p className="text-gray-500">Walk through flows, step by step, by using the interactive hotspots at your own preferred pace.</p>
             </div>
          </div>
        </div>

        <div className="text-center py-16 bg-black rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-2xl mx-auto px-4">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">From inspiration to creation.</h2>
             <p className="text-gray-400 text-lg mb-8">Save hours of UI & UX research with our massive library.</p>
             <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">
               Start browsing for free
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { TestimonialData } from '../types';

const testimonials: TestimonialData[] = [
  {
    id: '1',
    name: 'Sebastian Speier',
    role: 'Designer',
    company: 'Shop',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    text: "Mobbin is a great resource and it always comes in handy to see what the best practices or standards are for mobile patterns in our current landscape."
  },
  {
    id: '2',
    name: 'Meng To',
    role: 'Founder',
    company: 'DesignCode',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    text: "Mobbin is a game-changer for designers looking to step up their understanding of UX and UI design patterns. It's so massive, meticulously organized."
  },
  {
    id: '3',
    name: 'Marco Cornacchia',
    role: 'Lead Product Designer',
    company: 'Figma',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    text: "Mobbin is one of my favorite resources for product design and UI inspo. I love having access to a ton of 'real world examples' to see how different apps handle UI."
  },
  {
    id: '4',
    name: 'Rachel How',
    role: 'Product Designer',
    company: 'Independent',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    text: "Mobbin is my go-to reference for app & web design. Apart from saving countless hours, it gives me insights on the design patterns."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">What our users are saying.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col h-full hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                   <h4 className="font-bold text-sm text-gray-900">{t.name}</h4>
                   <p className="text-xs text-gray-500">{t.role} at <span className="text-black">{t.company}</span></p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
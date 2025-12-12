import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
       <div className="max-w-7xl mx-auto px-4">
         <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="max-w-sm">
               <div className="flex items-center gap-2 mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V12C18 12.5523 17.5523 13 17 13H15L12 17L9 13H7C6.44772 13 6 12.5523 6 12V7Z" fill="currentColor"/>
                    <path d="M14 13L12 15.5L10 13H14Z" fill="black"/>
                  </svg>
                  <span className="font-bold text-xl">Mobbin</span>
               </div>
               <p className="text-gray-400 text-sm">
                 Design better digital experiences with Mobbin. The world's largest mobile & web design library.
               </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
               <div>
                 <h4 className="font-bold mb-4">Product</h4>
                 <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white">Changelog</a></li>
                    <li><a href="#" className="hover:text-white">Become a contributor</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-bold mb-4">Support</h4>
                 <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">Help Center</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-bold mb-4">Social</h4>
                 <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">Twitter / X</a></li>
                    <li><a href="#" className="hover:text-white">Instagram</a></li>
                    <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                 </ul>
               </div>
            </div>
         </div>
         <div className="mt-16 pt-8 border-t border-gray-800 text-xs text-gray-500 flex justify-between items-center">
            <p>© 2024 Mobbin. All rights reserved.</p>
            <p>Made with ❤️ for designers.</p>
         </div>
       </div>
    </footer>
  );
};
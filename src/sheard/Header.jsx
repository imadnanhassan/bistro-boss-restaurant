import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import active from '../sheard/Active.css'

const Header = () => {
   const [isOpen, setOpen] = useState(false)
   const toggleMenu = () => {
      setOpen(!isOpen);
   };
   return (
      <div className='bg-header'>
         <div className="bg-white sticky shadow-lg  top-0  z-50">
            <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-20">
                  <div className="flex-shrink-0">
                     <Link to={'/'}><img className="h-8 w-auto" src={[]} alt="Logo" /></Link>
                  </div>
                  <div className="hidden md:block ">
                     <div className="ml-10 flex items-center space-x-4 font-Secondary">
                        <NavLink to={'/'} className="px-2 py-2 text-gray-500 cursor-pointer text-lg font-medium">Home</NavLink>
                        <NavLink to={'/'} className="px-2 py-2 text-gray-500 cursor-pointer text-lg font-medium">All Toy</NavLink>
                        <NavLink to={'/'} className="px-2 py-2 text-gray-500 cursor-pointer text-lg font-medium">Contact</NavLink>
                        <NavLink to={'/'} className="px-2 py-2 text-gray-500 cursor-pointer text-lg font-medium">Blog</NavLink>
                     </div>
                  </div>

                  <div className="md:hidden">
                     <Hamburger onToggle={toggleMenu} size={20} />
                  </div>

               </div>
            </div>

            <div className={`md:hidden  duration-500  ${isOpen ? "block" : "hidden"}`}>
               <div className="px-2 pt-2 pb-3 space-y-1 ">
                  <NavLink to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</NavLink >
                  <NavLink to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</NavLink >
                  <NavLink to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</NavLink >
               </div>
            </div>
         </div>



      </div>
   );
};

export default Header;
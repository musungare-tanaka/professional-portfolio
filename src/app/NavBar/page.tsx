'use client'
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Work History', href: '#work-history' },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative w-full bg-[#0A192F] text-white">
      {/* Logo */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 font-extrabold tracking-wider text-2xl">
        Tanaka
      </div>

      {/* Mobile Menu Icon */}
      <div 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 sm:hidden z-50"
        onClick={toggleModal}
      >
        {isModalOpen ? (
          <HiX className="text-2xl cursor-pointer" />
        ) : (
          <HiMenu className="text-2xl cursor-pointer" />
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex justify-center items-center h-16 space-x-6">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-[#457B9D] hover:border-b-2 hover:border-[#457B9D] transition"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div className="fixed top-0 right-0 h-full z-40 sm:hidden">
          <div className="w-[60vw] h-full bg-[#0A192F] shadow-lg flex flex-col items-center justify-center space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl hover:text-[#457B9D] transition"
                onClick={toggleModal}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
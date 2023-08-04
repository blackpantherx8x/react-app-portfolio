import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleHover = () => {
    const listItems = document.querySelectorAll('.mobile-nav-item');
    listItems.forEach((item) => item.classList.toggle('mobile-nav-hover'));
  };

  // Function to hide mobile menu when switching to desktop view
  const hideMobileMenu = () => {
    setShowMobileMenu(false);
  };

  // Function to handle resizing of the window
  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      // Hide mobile menu if screen width is greater than 768px (desktop view)
      setShowMobileMenu(false);
    }
  };

  useEffect(() => {
    // Add the resize event listener when the component mounts
    window.addEventListener('resize', handleResize);
    // Remove the resize event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{ width: '50px' }} />
      </div>

      {/* Menu (Desktop View) */}
      <ul
        className={`hidden md:flex space-x-4 ${
          showMobileMenu ? 'opacity-0 pointer-events-none' : 'ml-auto'
        }`}
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Social Icons */}
      <div>
        {/* Add your social icons here */}
      </div>

      {/* Hamburger (Mobile View) */}
      <div
        className={`md:hidden flex items-center ${
          showMobileMenu ? 'z-10' : 'z-0'
        } hover:text-teal-400`} // Apply the hover effect here
      >
        <FaBars onClick={toggleMobileMenu} />
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div
          className='fixed top-0 right-0 w-64 h-screen bg-[#8f2953] flex flex-col justify-center items-center'
          onClick={hideMobileMenu} // Hide mobile menu on clicking outside the menu
        >
          <ul>
            <li className='hover:text-teal-400 py-6 text-3xl'>Home</li>
            <li className='hover:text-teal-400 py-6 text-3xl'>About</li>
            <li className='hover:text-teal-400 py-6 text-3xl'>Skills</li>
            <li className='hover:text-teal-400 py-6 text-3xl'>Work</li>
            <li className='hover:text-teal-400 py-6 text-3xl'>Contact</li>
          </ul>
        </div>
      )}
    </div>
    
  );
};

export default Navbar;
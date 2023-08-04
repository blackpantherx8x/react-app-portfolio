import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
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

      {/* Hamburger (Mobile View) */}
      <div
        className={`md:hidden flex items-center ${
          showMobileMenu ? 'z-10' : 'z-0'
        } hover:text-teal-400`}
      >
        {showMobileMenu ? (
          <FaTimes onClick={toggleMobileMenu} />
        ) : (
          <FaBars onClick={toggleMobileMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div
          className='fixed top-0 right-0 w-64 h-screen bg-[#8f2953] flex flex-col justify-center items-center'
          onClick={hideMobileMenu} // Hide mobile menu on clicking outside the menu
        >
          <ul>
            <li className='hover:text-red-500 py-6 text-3xl'>Home</li>
            <li className='hover:text-tealCustom py-6 text-3xl'>About</li>
            <li className='hover:text-teal-400 py-6 text-3xl'>Skills</li>
            <li className='hover:text-teal-400 py-6 text-3xl'>Work</li>
            <li className='hover:text-teal-400 py-6 text-3xl'>Contact</li>
          </ul>
        </div>
      )}

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="/">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#69b6a5]'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-custom-purple'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
        
      </div>

    </div>
    
  );
};

export default Navbar;
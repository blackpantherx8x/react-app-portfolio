import React, { useState, useEffect } from 'react';
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [setShowMobileMenu] = useState(false);




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

  const isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
  const skillsMobileOffset = -100; // Offset for 'Skills' in mobile view
  const skillsDesktopOffset = -100; // Offset for 'Skills' in desktop view
  
  const workMobileOffset = -100; // Offset for 'Work' in mobile view
  const workDesktopOffset = -120; // Offset for 'Work' in desktop view

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b-2 border-pink-600' style={{ zIndex: 100 }}>
      <div>
      <Link to='home' smooth={true} duration={500}>
        <img src={Logo} alt="Logo" className='w-10 md:w-10 min-w-[50px] cursor-pointer' />
      </Link>
      </div>



      {/* Menu (Desktop and Mobile View) */}
      <ul className='flex space-x-2 md:space-x-4 md:ml-auto'>
  <li className='hover:text-white text-base md:text-2xl'>
    <Link to='home' smooth={true} duration={500}>Home</Link>
  </li>
  <li className='hover:text-white text-base md:text-2xl'>          
    <Link to='about' smooth={true} duration={500}>About</Link>
  </li>   
  <li className='hover:text-white text-base md:text-2xl'>          
    <Link to='skills' smooth={true} duration={500} offset={isMobileView ? skillsMobileOffset : skillsDesktopOffset}>Skills</Link>
  </li>        
  <li className='hover:text-white text-base md:text-2xl'>
    <Link to='work' smooth={true} duration={500} offset={isMobileView ? workMobileOffset : workDesktopOffset}>Work</Link>
  </li>
  <li className='hover:text-white text-base md:text-2xl'>
    <Link to='contact' smooth={true} duration={500}>Contact</Link>
  </li>
</ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="https://github.com/blackpantherx8x">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#69b6a5]'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="mailto:aweiss.webdev@gmail.com">
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

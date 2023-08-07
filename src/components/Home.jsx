import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleArrowHover = () => {
    setShowArrow(!showArrow);
  };

  const isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Alexander Weiss</h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>Front-End Web Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] font-bold'>I'm a junior front-end web developer <br />specializing in building state of the art digital experiences. <br />
          More coming soon....
        </p>

        <div>

        <Link to='work' smooth={true} duration={900} offset={isMobileView ? -100 : -200}>
          <button
            className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#69b6a5] hover:border-[#69b6a5]'
            style={{ zIndex: 0 }}
            onMouseEnter={handleArrowHover}
            onMouseLeave={handleArrowHover}

          >   
          View Work
            <span className={`duration-300 transform ${showArrow ? 'rotate-90' : 'rotate-0'}`}>
              <HiArrowNarrowRight className='ml-3' />
            </span>

          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;

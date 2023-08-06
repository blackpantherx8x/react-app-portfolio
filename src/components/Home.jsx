import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#08192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl fond-bold text-[#ccd6f6]'>Alexander Weiss</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack junior developer specializing in building state of the art digital experiences. <br />
        More coming soon....
        </p>

        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#69b6a5] hover:border-[#69b6a5]'>
            View Work <HiArrowNarrowRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
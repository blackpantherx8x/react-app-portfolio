import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Github from '../assets/github.png';
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-white'>

<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify center w-full hfull' style={{ overflow: 'visible' }}>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I am working with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] bg-[#0a192f]' style={{ borderRadius: '8px' }}>
                    <img className='w-20 mx-auto hover:scale-110 duration-500 py-4' src={HTML} alt="HTML Icon"  />
                    <p className='my-4 font-bold'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#0a192f]' style={{ borderRadius: '8px' }}>
                    <img className='w-20 mx-auto hover:scale-110 duration-500 py-4' src={CSS} alt="CSS Icon" />
                    <p className='my-4 font-bold'>CSS</p>
                </div>            
                <div className='shadow-md shadow-[#040c16] bg-[#0a192f]' style={{ borderRadius: '8px' }}>
                    <img className='w-20 mx-auto hover:scale-110 duration-500 py-4' src={JavaScript} alt="JS Icon" />
                    <p className='my-4 font-bold'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#0a192f]' style={{ borderRadius: '8px' }}>
                    <img className='w-20 mx-auto hover:scale-110 duration-500 py-4' src={ReactImg} alt="React Icon" />
                    <p className='my-4 font-bold'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#0a192f]' style={{ borderRadius: '8px' }}>
                    <img className='w-20 mx-auto hover:scale-110 duration-500 py-4' src={Tailwind} alt="Tailwind Icon" />
                    <p className='my-4 font-bold'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#0a192f]' style={{ borderRadius: '8px' }}>
                    <img className='w-20 mx-auto hover:scale-110 duration-500 py-4' src={Github} alt="Github Icon" />
                    <p className='my-4 font-bold'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#0a192f]' style={{ borderRadius: '8px' }}>
                    <img className='w-20 mx-auto hover:scale-110 duration-500 py-4' src={Node} alt="Node JS Icon" />
                    <p className='my-4 font-bold'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] bg-[#0a192f]' style={{ borderRadius: '8px' }}>
                    <img className='w-20 mx-auto hover:scale-110 duration-500 py-4' src={Mongo} alt="Node JS Icon" />
                    <p className='my-4 font-bold'>MongoDB</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills
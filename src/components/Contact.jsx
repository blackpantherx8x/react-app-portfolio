import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email at - aweiss.webdev@gmail.com</p>
        </div>
        <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Your Email' name='email' />
        <textarea className='p-2 bg-[#ccd6f6]' type="message" rows="10" placeholder='Message' name='message' />
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
      </form>

    </div>
  )
}

export default Contact
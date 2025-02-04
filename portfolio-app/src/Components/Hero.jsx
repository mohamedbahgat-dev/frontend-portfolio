import React from 'react'

function Hero() {
  return (
    <div className='border-b-1 border-gray-500'>
        <div className='flex justify-between items-center mx-20 mt-20 min-h-[70vh]'>
            <div className='mb-30'>
                <h2 className='font-poppins text-[80px] leading-24 text-transparent mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text'>Frontend Developer</h2>
                <h3 className='max-w-[450px] mb-10 text-gray-400'>I'm Mohamed, I can transforme ideas into seamless, user-friendly web experiences with clean code and creative design—let's build something amazing together.</h3>
                <button className='cv py-2 px-5 rounded-[20px] '>Download Resume</button>
            </div>
            <div className='mr-10 mb-20'>
                 <img src='../src/assets/avatar.svg'/>      
            </div>  
                      
        </div>
    </div>
  )
}

export default Hero;
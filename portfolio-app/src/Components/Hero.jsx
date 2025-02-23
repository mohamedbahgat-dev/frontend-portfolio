import React from 'react'
import NavBar from './NavBar';

function Hero() {
  return (
    <div className='hero h-[130vh] mt-[100px] '>
        <NavBar />
        <div className = 'flex flex-col justify-center items-center mx-20 min-h-[70vh]'>
          <div className = 'flex flex-col justify-center items-center mt-5'>
            <div className='flex justify-center gap-3'>
                <h2  className = 'name font-poppins text-[30px] text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text z-30 '>Mohamed Bahgat</h2>
    
            </div>      
            
            <div className='frontend-container mt-10 '>
              <h3  className = 'frontend uppercase text-[100px] text-center text-gray-500 z-30 ' >frontend Developer</h3>
            </div>
            
            <div className='elipse-container'>
              <div className = 'elipse flex gap-10'>
                <div className='shape-1 flex justify-center items-center'>
                  <img  src='../src/assets/html.svg'/>
                </div>
                <div className='shape-2 flex justify-center items-center'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'/>
                </div>
                <div className='shape-3 flex justify-center items-center'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'/>
                </div>
                <div className='shape-4 flex justify-center items-center'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg'/>
                </div>
                <div className='shape-5 flex justify-center items-center'>
                  <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg'/>
                </div>
                <div className='shape-6 flex justify-center items-center'>
                  <img  src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'/>
                </div> 
              </div>
            </div>
              
          </div> 
              
              <div className='shine flex flex-col justify-start items-center w-[110%] h-[690px] bg-white mt-20 rounded-t-full z-0'>

               
                <div className='shine-hide relative top-16 w-[41%] h-[30px] rounded-t-full z-20' ></div>
                <div className='shine-services uppercase font-poppins font-bold text-lg mt-10 z-10'>
                   <h2>Create visually appealing and mobile-friendly websites</h2>
                   <h2>build websites from scratch</h2>
                   <h2>Design and implement user-friendly interfaces</h2>
                   <h2>Build dynamic and interactive features</h2>
                   <h2>Enhance websites performance and accessibility</h2>
                </div>              
              </div>            
          </div>
    </div>
  )
}

export default Hero; 
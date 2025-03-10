import React from 'react'
import NavBar from './NavBar';

function Hero() {
  return (
    <div className='hero h-[150vh] mt-[100px] '>
           <div className = 'flex flex-col justify-center items-center mx-20 min-h-[70vh]'>
              <div className = 'flex flex-col justify-center items-center mt-5'>

                <div className='flex justify-center gap-3'>
                    <h2  className = 'name text-4xl uppercase font-semibold text-[#766cf9]  '>Mohamed Bahgat</h2>
                </div>      
                
                <div className='frontend-container mt-10 '>
                  <h3  className = 'frontend uppercase text-[6.8vw] text-center text-gray-500 ' >frontend Developer</h3>
                </div>
            
                <div className='elipse-container max-[600px]:hidden'>
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
                      <img className='' src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'/>
                    </div> 
                  </div>
                </div>  
              </div> 
                  
              <div className='shine flex flex-col justify-start items-center w-[110%] h-[690px] bg-white mt-20 rounded-t-full'>
                <div className='shine-hide relative top-16 w-[41%] h-[30px] rounded-t-full z-10' ></div>
                <div className='shine-services uppercase font-poppins font-bold text-lg mt-10'>
                   <h2>Create visually appealing and mobile-friendly websites</h2>
                   <h2>build websites from scratch</h2>
                   <h2>Design and implement user-friendly interfaces</h2>
                   <h2>Build dynamic and interactive features</h2>
                   <h2>Enhance websites performance and accessibility</h2>
                </div>              
              </div>   

                 {/* hero icons  */}
              <div className='absolute top-[750px] max-w-[70%] flex justify-center items-center flex-wrap gap-10 '>
          
                  <img src="../src/assets/coding1.png" alt="" className="w-50" />
                  <img src="../src/assets/coding2.png" alt="" className="w-50" />
                  <img src="../src/assets/coding3.png" alt="" className="w-50" />
                  <img src="../src/assets/coding4.png" alt="" className="w-50" />
                 
              </div>

          </div>
    </div>
  )
}

export default Hero; 
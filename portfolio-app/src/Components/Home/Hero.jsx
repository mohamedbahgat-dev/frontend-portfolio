import React from 'react'
import { useEffect } from 'react';


function Hero() {




  return (
    <div className='hero max-h-[150vh] mt-[100px] '>
           <div className = 'flex flex-col justify-center items-center mx-20 min-h-[70vh]'>
              <div className = 'flex flex-col justify-center items-center mt-5'>
                
                {/* my name  */}
                <div className='flex justify-center gap-3'>
                    <h2  className = 'name uppercase font-semibold text-[#766cf9] max-[600px]:top-30 min-[600px]:top-35 min-[600px]:text-[20px] min-[768px]:top-35 min-[768px]:text-[25px]'>Mohamed Bahgat</h2>
                </div>   
                
                {/* custome cursor effect */}
                {/* <div className='cursor-name h-5 w-5 bg-red-600 rounded-full'></div>    */}
                
                {/* front-end banner */}
                <div className='frontend-container mt-10'>
                  <h3  className = 'frontend uppercase text-[6.8vw] text-center text-gray-500' >frontend Developer</h3>
                </div>
            
                {/* rotating logos */}
                <div className='elipse-container'>
                  <div className = 'elipse flex gap-10'>
                    <div className='shape shape-1 flex justify-center items-center'>
                      <img  src='../src/assets/html.svg'/>
                    </div>
                    <div className='shape shape-2 flex justify-center items-center'>
                      <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'/>
                    </div>
                    <div className='shape shape-3 flex justify-center items-center'>
                      <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'/>
                    </div>
                    <div className='shape shape-4 flex justify-center items-center'>
                      <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg'/>
                    </div>
                    <div className='shape shape-5 flex justify-center items-center'>
                      <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg'/>
                    </div>
                    <div className='shape shape-6 flex justify-center items-center'>
                      <img className='' src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'/>
                    </div> 
                  </div>
                </div>  
              </div> 
                  
              <div className='shine flex flex-col justify-start items-center w-[110%] h-[690px] bg-white mt-20 rounded-t-full'>
              </div>   

                 {/* hero icons  */}
              <div className='hero-icons absolute top-[750px] max-w-[70%] flex justify-center items-center flex-wrap gap-20 max-[600px]:top-[450px] max-[600px]:w-40 max-[600px]:gap-20 min-[600px]:top-[630px] min-[768px]:top-[690px] min-[600px]:gap-30 min-[992px]:gap-25 min-[992px]:top-[780px]'>
                  
                <div className="h-45 max-[600px]:h-30 w-60 flex flex-col justify-between gap-5 items-center">
                   <img src="/src/assets/responsive.png" alt="" className="responsive-icon block max-w-30 max-[600px]:w-20" />
                   <h3 className='font-poppins text-2xl font-semibold text-blue-700'>Responsive Apps</h3>
                  <p className='text-center w-70 text-sm'>Creating visually appealing and mobile-friendly websites that work seamlessly across all devices</p>
                </div>
                 
                <div className="h-45 max-[600px]:h-30 flex flex-col justify-between gap-5 items-center">
                   <img src="/src/assets/user-friendly.png" alt="" className="user-friendly-icon block max-w-30 max-[600px]:w-20" />
                   <h3 className='font-poppins text-2xl font-semibold text-blue-700'>User-friendly designs</h3>
                   <p className='text-center w-70 text-sm'>Designing and implementing intuitive, user-friendly interfaces that enhance user experience.</p>
                </div>
                
                 <div className="h-45 max-[600px]:h-30 flex flex-col justify-between gap-5 items-center">
                   <img src="/src/assets/performance.png" alt="" className="performance-icon block max-w-30 max-[600px]:w-20" />
                   <h3 className='font-poppins text-2xl font-semibold text-blue-700'>High performance</h3>
                    <p className='text-center w-70 text-sm'>Improving website performance, speed, and accessibility for a better user experience.</p>
                </div>
                 
              </div>

          </div>
    </div>
  )
}

export default Hero; 
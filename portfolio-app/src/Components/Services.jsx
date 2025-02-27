import React from 'react'
import { useState, useEffect, useRef } from 'react';

function Services() {


    useEffect(()=> {
        
        const observer = new IntersectionObserver((entries)=> {
            entries.forEach((entry)=> {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')

                }else {
                    entry.target.classList.remove('show')
                }
               
            })
        })
        const observedElements = document.querySelectorAll('.hide')
        observedElements.forEach((el)=> observer.observe(el))
          
    }, [])
    

  return (
    <div className='border-b-1 border-b-gray-500 mt-[900px]' >
        <h1 className='inline-block mt-10 mx-20 font-poppins text-[30px] font-light uppercase text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text'>Services</h1>
        <div id='services' className='flex justify-center mt-5'>
            {/* moving icon */}
            
            {/* <img id='code' className='bg-white w-18 absolute -mt-8 -ml-10 rounded-full p-2' src='../src/assets/coding.png' /> */}
            <svg id='code' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-12 bg-sky-500 absolute -mt-6 -ml-16 rounded-full p-2">
                <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>

            {/* timeline --start-- */}
            <div className='timeline'>
              <div className='outer'> 
                {/* from here add cards */}
                <div className='card-container' id='firstPath'>
                    <div className='card cv text-center font-poppins text-lg'>
                        <h2>Custom Website Development</h2> 
                    </div>
                    <div>
                        <p className='hide absolute w-96 mt-15 font-thin'>Building custom websites from scratch tailored to your unique needs and brand identity.</p>
                        <div className='icons absolute flex gap-5 mt-36'>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center  bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='../src/assets/html.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                            </div>    
                        </div>
                    </div>
                </div>  
                {/* card 2 */}
                <div className='card-container'>
                    <div className='card cv text-center font-poppins text-lg'>
                        <h2>Responsive Web Design</h2> 
                    </div>
                    <div >
                        <p className='hide absolute w-[480px] mt-15 right-21 font-thin'>Creating visually appealing and mobile-friendly websites that work seamlessly across all devices (desktop, tablet, and mobile).</p>
                        <div className='icons absolute flex gap-5 mt-36 right-30'>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center  bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-16 h-17 rounded-sm' src='../src/assets/media.png' />
                            </div>
                            
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-16 h-17 rounded-sm' src='../src/assets/flexbox.jpg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-18 h-17 rounded-sm' src='../src/assets/grid.jpg' />
                            </div>    
                        </div>
                    </div>
                </div>  

                {/* card 3 */}
                 <div className='card-container'>
                    <div className='card cv text-center font-poppins text-lg'>
                        <h2>User Interface (UI) Development</h2> 
                    </div>
                    <div>
                        <p className='hide absolute w-96 mt-15 font-thin'>Designing and implementing intuitive, user-friendly interfaces that enhance user experience.</p>
                        <div className='icons absolute flex gap-5 mt-36'>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center  bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-10' src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' />
                            </div> 
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />
                            </div>
                               
                        </div>
                    </div>
               </div>  
               {/* card 4 */}

                 <div className='card-container'>
                    <div className='card cv text-center font-poppins text-lg'>
                        <h2>Front-End Optimization</h2> 
                    </div>
                    <div >
                        <p className='hide absolute w-[480px] mt-15 right-21 font-thin'>Improving website performance, speed, and accessibility for a better user experience.</p>
                        <div className='icons absolute flex gap-5 mt-36 right-30'>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center  bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-16 h-17 rounded-sm' src='../src/assets/webvitals.png' />
                            </div>
                            
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-16 h-17 rounded-sm' src='https://cdn.worldvectorlogo.com/logos/google-lighthouse-icon-may-2019-.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-17 rounded-sm' src='https://www.w3.org/assets/logos/w3c/w3c-no-bars.svg'/>
                            </div>    
                        </div>
                    </div>
                 </div>  

                 {/* card 5 */}

                 <div className='card-container'>
                    <div className='card cv text-center font-poppins text-lg'>
                        <h2>Interactive Web Elements</h2> 
                    </div>
                    <div>
                        <p className='hide absolute w-96 mt-15 font-thin'>Adding dynamic and interactive features like animations, sliders, and forms to engage users.</p>
                        <div className='icons absolute flex gap-5 mt-36'>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center  bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-16 h-17 rounded-md' src='../src/assets/greenstock.jpg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                                
                        </div>
                    </div>
                </div> 

                {/* card 6 */}
                <div className='card-container'>
                    <div className='card cv text-center font-poppins text-lg'>
                        <h2>Single-Page Applications (SPAs)</h2> 
                    </div>
                    <div >
                        <p className='hide absolute w-[450px] mt-15 right-28 font-thin'>Developing fast and efficient SPAs for seamless user navigation and interaction.</p>
                        <div className='icons absolute flex gap-5 mt-36 right-30'>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-14' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center  bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-16 h-17 rounded-sm' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'/>
                            </div>
                            
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm  inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-16 rounded-sm' src='../src/assets/reactrouter.png' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center bg-gray-800 rounded-sm inset-shadow-sm inset-shadow-gray-700'>
                                <img className='w-18 h-17 rounded-sm' src='../src/assets/vite.svg' />
                            </div>    
                        </div>
                    </div>
                </div>  
             </div>
           </div>

           {/* timeline --ends-- */}
        </div>
    </div>
  )
}

export default Services;
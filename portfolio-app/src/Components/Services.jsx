import React from 'react'
import { useEffect } from 'react';
import Footer from './Home/Footer';

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
    <div>
          <div className='night-stars absolute top-0 w-full h-[1100px] flex justify-center -z-1'>
            <span className='planet absolute top-40 z-20 '></span>
            <span className='planet-2 absolute top-40 z-10'></span>
            <div className='w-[1000px] h-[400px] self-center bg-white mt-60 blur-3xl rounded-t-full'></div>

            {/* stars  */}
            <div class="animated-stars z-0">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
          </div>
          <div className='service-header absolute top-130 w-full flex justify-center  items-center'>
                <h2 className='text-5xl text-[#6e65f6]'>See what I can do</h2>
          </div>
         
          <div id='services' className=' flex justify-center mt-[400px]'>
            
            {/* moving icon */}
                <svg id='code' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className=" w-0 bg-[#6e65f6] absolute mt-83 -ml-16 rounded-full p-2">
                    <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
                <div className=" w-fit bg-[#6e65f6] absolute mt-85 text-center text-white rounded-full p-2 px-4">
                    <h3>Web development</h3>
                </div>
                {/* timeline --start-- */}
                <div className='timeline mt-90'>
                  <div className='outer'> 
                {/* from here add cards */}
                
                {/* card 1 */}
                   <div className='card-container' id='firstPath'>
                    <div className='card text-center font-poppins text-lg'>
                        <h2>Custom Website Development</h2> 
                    </div>
                    <div>
                        <p className='hide absolute w-96 mt-15 font-thin'>Building custom websites from scratch tailored to your unique needs and brand identity.</p>
                        <div className='icons absolute flex gap-5 mt-36'>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-10' src='../src/assets/html.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-10' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='rounded-lg w-10' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-10' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
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
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-10' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center  rounded-sm'>
                                <img className='w-12 h-12 rounded-lg' src='../src/assets/media.png' />
                            </div>
                            
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-12 h-12 rounded-lg' src='../src/assets/flexbox.jpg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm'>
                                <img className='w-12 h-12 rounded-lg' src='../src/assets/grid.jpg' />
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
                            <div className='icon hide w-24 h-24  grid place-items-center  rounded-sm'>
                                <img className='w-8' src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm'>
                                <img className='w-10' src='https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' />
                            </div> 
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-10' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-10 rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />
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
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center rounded-sm '>
                                <img className='w-10' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center  rounded-sm'>
                                <img className='w-12 h-12' src='../src/assets/webvitals.png' />
                            </div>
                            
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center rounded-sm '>
                                <img className='w-14 h-14 ' src='https://cdn.worldvectorlogo.com/logos/google-lighthouse-icon-may-2019-.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 pt-1 grid place-items-center rounded-sm'>
                                <img className='w-14 rounded-sm' src='https://www.w3.org/assets/logos/w3c/w3c-no-bars.svg'/>
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
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-12 rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm'>
                                <img className='w-12' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm'>
                                <img className='w-12 h-12 rounded-md' src='../src/assets/greenstock.jpg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-12' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg' />
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
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-12' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center  rounded-sm'>
                                <img className='w-12 h-12 rounded-sm' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'/>
                            </div>
                            
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm '>
                                <img className='w-12 rounded-sm' src='../src/assets/reactrouter.png' />
                            </div>
                            <div className='icon hide w-24 h-24 grid place-items-center rounded-sm'>
                                <img className='w-12 h-12 rounded-sm' src='../src/assets/vite.svg' />
                            </div>    
                        </div>
                     </div>
                  </div>  
               </div>
             </div>
           {/* timeline --ends-- */}
        </div>
         <div className="flex flex-col items-center justify-center text-center mt-20 relative">
           <h2 className="market-title z-10">You want an elegant, modern and responsive website?
            <a href="mailto:mohamedbahgat950@gmail.com" target="_blank">
               <span className="inline-block text-xl align-middle ml-3 w-50 rounded-full bg-red-400 text-white py-3">Let's connect
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-7 inline-block ml-3 bg-white rounded-full p-1 ">
                   <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                 </svg>
               </span>
            </a>           
           </h2> 
           <div className="w-50 h-50 absolute top-[25%] left-[43%] bg-[#a6a8eb] z-0 blur-[100px]" ></div>       
        </div> 
        <Footer />

    </div>
  )
}

export default Services;
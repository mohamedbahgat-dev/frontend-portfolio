import React from 'react'
import { useEffect } from 'react'
import Footer from './Home/Footer'

function Projects() {

    useEffect(()=> {
      const projects = document.querySelectorAll('.project-planet')

      projects.forEach((project)=> {
        const video = project.previousSibling;
        const tools = project.nextSibling

        project.addEventListener('mousemove', (event)=> {

           let xMovement = event.movementX
           let yMovement = event.movementY

           tools.style.transform = `translate(${xMovement * 3}px, ${yMovement}px)`
           tools.style.transition = 'transform 1s linear'
           
           video.style.transform = `translate(${xMovement * 3}px, ${yMovement}px)`
           video.style.transition = 'transform 1s linear'

        })
      })

      },[])
  

    useEffect(()=> {
        const projects = document.querySelectorAll('.project-container')
        const timeline = document.querySelector('.service-timeline')
       
        projects.forEach((project)=> {
            const image = project.firstChild
            const tools = project.lastChild

            project.addEventListener('mouseover', function(){
  

                image.style.display = 'flex'
                image.style.animation = 'zoomIn 0.4s ease-in-out'
                tools.style.display = 'flex'
                tools.style.animation = 'zoomIn 0.4s ease-in-out'

            })

            project.addEventListener('mouseleave', function(){
                image.style.display = 'none'
                 image.style.animation = 'zoomOut 0.4s linear'
                tools.style.display = 'none'
                tools.style.animation = 'zoomOut 0.4s linear'
                timeline.style.opacity = '1'
            })
        })
    })

  return (
    <div id='projects' className='bg-amber-50'>
         <div className='absolute top-0 w-full h-full bg-amber-50 -z-1'>
         </div>
         <div className='flex justify-center items-center mt-40 text-center '>
             <h1 className='projects-header text-4xl  font-semibold text-[#6e65f6] uppercase'>Work Archive</h1>
         </div>

         {/* timeline */}
         <div className='service-timeline'>
            <div className='dot w-2 h-2 bg-blue-950 rounded-full absolute top-55 left-[49.9%] '></div>
            <div className='line w-1 h-80 opacity-10 bg-blue-950 absolute top-60 left-[50%]'></div>
            <div className='dot w-2 h-2 bg-blue-950 rounded-full absolute top-200 left-[49.9%] '></div>
            <div className='line w-1 h-110 opacity-10 bg-blue-950 absolute top-205 left-[50%]'></div>
             <div className='dot w-2 h-2 bg-blue-950 rounded-full absolute top-375 left-[49.9%] '></div>
            <div className='line w-1 h-110 opacity-10 bg-blue-950 absolute top-380 left-[50%]'></div>
         </div>
        
         <div className='flex flex-col justify-center items-center gap-50 mt-60 '>
            {/* projects cards --start-- */}

            {/* project - 1 */}
           
            <a href='https://momento-todo-planner-app.vercel.app/' target='_blank'>
               <div className='project-container flex justify-center items-center max-w-full gap-10'>
                  <div className='project-video todo-video absolute justify-center items-center left-30 top-120 w-[150px] h-[400px] -rotate-10 self-start'>               
                        <video className='rounded-2xl' width="150" height="140" autoplay='true'  muted='true' loop >
                          <source src="../src/assets/todoVideo.mp4" type="video/mp4" />
                          <source src="todo-video.ogg" type="video/ogg" />
                        </video>                   
                  </div>
                  <div className='project-planet todo-project opacity-5 w-[500px] h-[500px] flex items-center justify-center rounded-full'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <div className='flex flex-col items-center justify-center font-impact gap-2'>
                            <h2 className='text-xl'>2024</h2>
                            <h2 className=' mb-3 uppercase text-4xl'>ToDo planner </h2> 
                        </div>                
                        <p className='text-sm text-gray-600 text-center w-[320px] max-[600px]:text-xs max-[600px]:w-[220px]'>To do list planner app that have a daily, weekly, monthly and yearly tasks lists. the users can add, remove and toggle tasks as completed and drag and drops tasks as they like.</p>  
                        <div className='flex gap-5 font-light text-sm text-gray-700 '>
                          <span className='bg-green-200 p-1 px-2 rounded-4xl'>HTML</span>
                          <span className='bg-green-200 p-1 px-2 rounded-4xl'>CSS</span>
                          <span className='bg-green-200 p-1 px-2 rounded-4xl'>JavaScript</span> 
                        </div>               
                         
                    </div>
                  </div>
                  <div className='hidden tools todo-tools absolute font-poppins flex-col justify-center items-center  min-w-100 right-30'>
                    <div className='flex items-center  justify-center self-start mb-20'>
                       <video className='rounded-xl -rotate-3' width="240" height="350" autoplay='true'  muted='true' loop >
                           <source src="../src/assets/todoVideo2.mp4" type="video/mp4" />
                           
                       </video> 
                    </div>
                    <div className='flex items-center justify-center self-end '>
                         <img className='w-50 h-30 rounded-xl -rotate-4' src='../src/assets/todolog-img.png'/>
                    </div>
                    <div className='flex items-center justify-center self-start mt-20 mr-50'>
                         <img className='w-50 h-30 rounded-xl ' src='../src/assets/todoregi-img.png'/>
                    </div>
                  </div>
              </div>
            </a>    
                        
            {/* project 2 */}
            <a href='https://moviemania-app-nine.vercel.app/' target='_blank'>
                <div className='project-container flex justify-center items-center max-w-[1200px] gap-10 '>

                  <div className='project-img hidden absolute left-50 w-50 h-40 rounded-xl self-start'>
                    <img  src='../src/assets/Moviemania.png'/>
                  </div>
                  
                  <div className='project-planet movie-project opacity-10 w-[500px] h-[500px] flex items-center justify-center rounded-full'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <div className='flex flex-col items-center justify-center font-impact gap-2'>
                            <h2 className='text-xl'>2024</h2>
                            <h2 className=' mb-3 uppercase text-4xl'>MovieMania app</h2> 
                        </div>                
                        <p className='text-sm text-gray-600 text-center w-[320px] max-[600px]:text-xs max-[600px]:w-[220px]'>MovieMania app is a database for Movies/Series using TMDB API to get the data. the user can search for movies using required terms and find results based on it.</p>      
                    </div>
                  </div>

                  <div className='hidden tools movie-tools absolute right-60 font-poppins flex-col justify-center items-center gap-3'>
                    <div className='flex items-center justify-center self-start mb-10'>
                        <span>React</span>
                    </div>
                    <div className='flex items-center justify-center self-end'>
                         <span>Tailwind</span>
                    </div>
                    <div className='flex items-center justify-center self-start mt-10'>
                        <span>JavaScript</span>
                    </div>
                  </div>
                  
                </div>              
            </a>   

             {/* project 3 */}
            <a href='https://alx-fe-reactjs-sepia.vercel.app/' target='_blank'>

                <div className='project-container flex justify-center items-center max-w-[1200px] gap-10'>

                  <div className='project-img hidden absolute left-50 w-50 h-40 rounded-xl self-start '>
                      <img  src='../src/assets/githubsearch.png'/>  
                  </div>
                
                  <div className='project-planet github-project opacity-5 w-[500px] h-[500px] flex items-center justify-center rounded-full'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <div className='flex flex-col items-center justify-center font-impact gap-2'>
                            <h2 className='text-xl'>2024</h2>
                            <h2 className=' mb-3 uppercase text-4xl'>GitHub search app</h2> 
                        </div>                
                        <p className='text-sm text-gray-600 text-center w-[320px] max-[600px]:text-xs max-[600px]:w-[220px]'>GitHub search app is an app that allow user to search for GitHub users by name, location or number of repos.</p>      
                    </div>
                  </div>

                  <div className='hidden tools github-tools absolute right-60 font-poppins flex-col justify-center items-center gap-3'>
                    <div className='flex items-center justify-center self-start mb-10'>
                        <span>React</span>
                    </div>
                    <div className='flex items-center justify-center self-end'>
                         <span>Tailwind</span>
                    </div>
                    <div className='flex items-center justify-center self-start mt-10'>
                        <span>JavaScript</span>
                    </div>
                  </div>
                </div>              
            </a>   
            
            {/* projects cards --end-- */}
            
         </div>
          <div className="slogan flex flex-col items-center justify-center text-center mt-30  relative">
           <h2 className="market-title-project z-10">A front-end developer passionate about building seamless and interactive experiences!
            <a href="mailto:mohamedbahgat950@gmail.com" target="_blank">
               <span className="inline-block text-xl align-middle ml-3 w-50 rounded-full bg-red-400 text-white py-3 max-[600px]:mt-5">Let's connect
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-7 inline-block ml-3 bg-white rounded-full p-1 ">
                   <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                 </svg>
               </span>
            </a>           
           </h2> 
           <div className="w-50 h-50 absolute top-[25%] left-[43%] bg-[#d3f5c1] z-0 blur-[100px]" ></div>       
        </div> 
         <Footer />
    </div>
  )
}

export default Projects;
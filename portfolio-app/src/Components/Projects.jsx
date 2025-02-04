import React from 'react'


function Projects() {


  return (
    <div id='projects' className='min-h-auto border-b-1 border-gray-500 '>
         <h1 className='inline-block mt-10 mx-20 font-poppins text-[30px] font-light uppercase text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text'>projects</h1>
         <div className='flex flex-wrap gap-10 justify-center items-center my-15 mx-20'>
            {/* projects cards --start-- */}
            <div className='project flex flex-wrap justify-center gap-5 p-5 rounded-xl'>
                <img className='w-50 h-30 rounded-lg' src='../src/assets/todoapp.png'/>
                <div>
                    <div className='flex items-baseline gap-2'>
                        <h2 className='mb-3 font-poppins text-lg'>ToDo list planner app</h2> 
                        
                        <a href='https://momento-todo-planner-app.vercel.app/' target='_blank'>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='size-4'>
                               <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                             </svg>
                        </a>    
                       
                    </div>                
                    <p className='text-sm text-gray-400 w-[320px]'>To do list planner app that have a daily, weekly, monthly and yearly tasks lists. the users can add, remove and toggle tasks as completed and drag and drops tasks as they like.</p>
                    <div className='tools flex gap-3 mt-3'>
                        <span className='cv'>HTML</span>
                        <span className='cv'>CSS</span>
                        <span className='cv'>JavaScript</span>
                    </div>
                </div>
            </div>

            <div className='project flex flex-wrap justify-center gap-5 p-5 rounded-xl'>
                <img className='w-50 h-30 rounded-lg' src='../src/assets/Moviemania.png'/>
                <div>
                    <div className='flex items-baseline gap-2'>
                        <h2 className='mb-3 font-poppins text-lg'>MovieMania app</h2>     
                        <a href='https://moviemania-app-nine.vercel.app/' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='size-4'>
                               <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                            </svg>
                        </a>   
                    </div>                
                    <p className='text-sm text-gray-400 w-[320px]'>MovieMania app is a database for Movies/Series using TMDB API to get the data. the user can search for movies using required terms and find results based on it.</p>
                    <div className='tools flex gap-3 mt-3'>
                        <span className='cv'>React</span>
                        <span className='cv'>Tailwind</span>
                        <span className='cv'>JavaScript</span>
                    </div>
                </div>
            </div>

            <div className='project flex flex-wrap justify-center gap-5 p-5 rounded-xl'>
                <img className='w-50 h-30 rounded-lg' src='../src/assets/githubsearch.png'/>
                <div>
                    <div className='flex items-baseline gap-2'>
                        <h2 className='mb-3 font-poppins text-lg'>GitHub search app</h2>     
                        <a href='https://alx-fe-reactjs-sepia.vercel.app/' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='size-4'>
                               <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                            </svg>
                        </a>   
                    </div>                
                    <p className='text-sm text-gray-400 w-[320px]'>GitHub search app is an app that allow user to search for GitHub users by name, location or number of repos. </p>
                    <div className='tools flex gap-3 mt-3'>
                        <span className='cv'>React</span>
                        <span className='cv'>Tailwind</span>
                        <span className='cv'>JavaScript</span>
                    </div>
                </div>
            </div>

            {/* projects cards --end-- */}
         </div>
    </div>
  )
}

export default Projects;
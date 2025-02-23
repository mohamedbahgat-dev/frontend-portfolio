import React from 'react'
import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'

function Skills() {

  const containerScroll = useRef()
  const textScroll = useRef()


  useEffect(()=> {

    const skills = document.querySelectorAll('.skills img')
    const body = document.body
    const skillsDetails = document.querySelectorAll('.skill-details div')

    skills.forEach((skill, skillIndex) => {
      skill.addEventListener('mouseover', function(){
       
        body.style.transition = '0.5s ease-in'

        skillsDetails.forEach((detail, detailIndex)=> {
        if(skillIndex === detailIndex){
          detail.style.display = 'block'
          detail.style.animation = 'fadeIn 2s ease-in-out'
        }
      })      
      })

      skill.addEventListener('mouseleave', function(){
       
        skillsDetails.forEach((detail, detailIndex)=> {
        if(skillIndex === detailIndex){
          
          detail.style.display = 'none'
          detail.style.animation = 'fadeOut 2s ease-out'
         
        }
      })
          
      })
    })
    
  })

  // set infinit text animation

  // curved text motion
  const { scrollYProgress } = useScroll({
    target: containerScroll,
    offset: ['start end', 'end end']
  })

  useEffect(()=> {
    scrollYProgress.on('change', e => {
      
      textScroll.current.setAttribute('startOffset',e *  -30 + '%' )
    })

  },[])

  

  return (
    <div ref={containerScroll}  className='skills-container h-[150vh] mt-[950px]'>

      <div className=' flex flex-col justify-center items-center absolute top-[750px] w-full text-center pr-5'>
        <img className='absolute w-35 -top-[50px] ml-12' src='../src/assets/circle.png'/>
        <h2 className='skills-header text-4xl text-[#6e65f6] uppercase'><span className='text-base'>See my</span> skills</h2>
        <img className='arrow w-20 mr-40 ' src='../src/assets/arrow.svg'/>
        
      </div>
       
      
      <svg width="1455" height="154" viewBox="0 0 1463 124" fill="none" xmlns="http://www.w3.org/2000/svg" className='moving-tap absolute top-[890px] overflow-hidden'>
              <path id='text-path' d="M4.52585 60.4009C621.82 286.992 880.5 -110 1458.77 54.4438" stroke="none" stroke-width="17"/>
              <text id='moving-text' stroke='#9470e7' fill='#9470e7' className='uppercase overflow-hidden'>
                    <textPath href='#text-path' ref={textScroll} startOffset={'-30%'}>HTML . CSS . JAVASCRIPT . REACT . tailwind . Node.js . UX/UI . Web . Visuals . Animations . GIT . GitHub . DOM . HTML . CSS . JAVASCRIPT . REACT . tailwind . Node.js . UX/UI . Web . Visuals . Animations . GIT . GitHub . DOM</textPath>
              </text>  
       </svg>
      
       
       <div className='flex flex-col items-center justify-center'>
           
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="wave-2">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
           
            

            <div className='z-0 skills flex justify-center items-center flex-wrap gap-x-25 gap-y-25 w-[90%] h-[750px] mt-20 p-20'>

              <div className="javascript-cover">
                <div className='javascript'>
                   <img className='' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'/>
                </div>
              </div>
                
                <div className="html-cover">
                  <div className='html'>
                    <img  src='../src/assets/html.svg' />
                  </div>
                </div>
               
                <div className="css-cover">
                  <div className='css' >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg'/>
                  </div>
                </div>
                
                <div className="react-cover">
                  <div className='react' >
                    <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                  </div>
                </div>
                
                <div className="vite-cover">
                  <div className='vite'>
                   <img  src='../src/assets/vite.svg'/>
                  </div>
                </div>

                <div className="git-cover">
                  <div className='git'>
                   <img  src='../src/assets/git.svg'/>
                  </div>
                </div>

              
               <div className="github-cover">
                  <div className='github'>
                    <img  src='../src/assets/github.svg'/>
                  </div>
               </div>
               
                <div className="tailwind-cover">
                    <div className='tailwind flex justify-center'>
                      <img  src='../src/assets/tailwindcss.svg'/>
                    </div>
                </div>
                
                <div className="figma-cover">
                   <div className='figma flex justify-center'>
                     <img  src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'/>
                   </div> 
                </div>
            </div>

            <div className='relative '>
                <h2 className='tech relative bottom-[430px]'>skill.kit <span className=' text-6xl ml-5'>technologies</span> </h2>
               
            </div>

            {/* skills details */}
            <div className='skill-details flex gap-10 w-[1300px] text-sm mt-30'>
               <div className='hidden'>
                 <ul className=' js-skills flex list-style-type items-center gap-5 '>
                   <li className=''>Strong understanding of core JavaScript concepts, including DOM manipulation, event handling, and asynchronous programming.</li>
                   <li>Experience with modern ES6+ features such as arrow functions, destructuring, promises, and async/await.</li>
                   <li>Developed interactive web applications using vanilla JavaScript and optimized performance for better user engagement.</li> 
                 </ul>
               </div>
              
              <div className='hidden'>
                <span>this is javaScript html</span>
              </div>

              <div className='hidden'>
                <span>this is javaScript css</span>
              </div>

              <div className='hidden'>
                <span>this is javaScript react</span>
              </div>
              <div className='hidden'> 
                <span>this is javaScript git</span>
              </div>
              <div className='hidden'>
                <span>this is javaScript tailwind</span>
              </div>
              <div className='hidden'>
                <span>this is javaScript figma</span>
              </div>
            </div>
       </div>       
    </div>
  )
}

export default Skills
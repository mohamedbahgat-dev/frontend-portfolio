import React from 'react'
import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Footer from './Footer'

function Skills() {

  const containerScroll = useRef()
  const textScroll = useRef()

  // define scroll function
  const { scrollYProgress } = useScroll({
    target: containerScroll,
    offset: ['50px end', 'start start']
  })


  // calling scroll function on skills elements
  useEffect(()=> {
    const mediaQuery = window.matchMedia("(min-width:992px)");
   
    const eles = document.querySelectorAll('.skills .skill');
   
    
    scrollYProgress.on('change', e => {
     
      eles.forEach((ele, i)=> {

      if(mediaQuery.matches ) {
         
          if (i === 0) {
          ele.style.transform = `translate(${e * 210 }px , ${e *  150 }px)`
          ele.style.rotate = `${ (Math.sqrt(e) * 10 + 2 ) - 10}deg`
          ele.style.opacity = `${ e * 0.85}`
          
      
        }

        else if (i === 1){
          ele.style.transform = `translateY(${e *  60 }px)`
          ele.style.opacity = `${ e * 0.85}`
        

        }

        else if (i === 2){
          ele.style.transform = `translate(${e * - 200 }px ,${e *  165 }px)`
          ele.style.opacity = `${ e * 0.85}`  
          ele.style.rotate = `${ - (Math.sqrt(e) * 10 + 2 ) + 14}deg`

        }

        else if (i === 3){
          ele.style.transform = `translate(${e * 230 }px ,${e *  80 }px)`
          ele.style.opacity = `${ e * 0.85}`
        
          ele.style.rotate = `${ - (Math.sqrt(e) * 10 + 2 ) + 10}deg`

        }

        else if (i === 4){
          ele.style.transform = `translate(${e * -235 }px ,${e *  63 }px)`
          ele.style.opacity = `${ e * 0.95}`

          ele.style.rotate = `${  (Math.sqrt(e) * 10 + 2 ) - 14}deg`

        }

        else if (i === 5){
          ele.style.transform = `translate(${e *  210 }px , ${e * - 150 }px)`
          ele.style.rotate = `${ (Math.sqrt(e) * 10 + 2 ) - 10}deg`
          ele.style.opacity = `${ e * 0.85}`
        

        }

        else if (i === 6){
          ele.style.transform = `translateY(${e *  - 60 }px)`
          ele.style.opacity = `${ e * 0.85}`
        

        }

        else if (i === 7){
          ele.style.transform = `translate(${e * - 220 }px ,${e * - 130 }px)`
          ele.style.opacity = `${ e * 0.85}`
        
          ele.style.rotate = `${ - (Math.sqrt(e) * 10 + 2 ) + 14}deg`

        }

      }
    })
 })

  },[])


  useEffect(()=> {

    const skills = document.querySelectorAll('.skills .skill img')
  
    const skillsDetails = document.querySelectorAll('.skill-details .skills-kit')

    const techTitle = document.querySelector('.tech')
    console.log(techTitle)

    skills.forEach((skill, skillIndex) => {
      skill.addEventListener('mouseover', function(){

        skillsDetails.forEach((detail, detailIndex)=> {
        if(skillIndex === detailIndex){
          techTitle.style.opacity = '0.05'
          detail.style.display = 'flex'
          detail.style.animation = 'fadeIn 2s ease-in-out'
        }
      })      
      })

      skill.addEventListener('mouseleave', function(){
       
        skillsDetails.forEach((detail, detailIndex)=> {
        if(skillIndex === detailIndex){
          
          detail.style.display = 'none'
          techTitle.style.opacity = '1'
          detail.style.transition = '2s ease-in-out'
          detail.style.animation = 'fadeIn 2s ease-in-out'
         
        }
      })     
      })
    })  
  })

  

  return (
    <div className='skills-root'>


      {/* sun shape */}
      <div className='w-full max-[600px]:h-[60vh] min-[600px]:h-[80vh] min-[768px]:h-[80vh] min-[992px]:h-[100vh]  flex justify-center items-center '>
        <div className='skills-elipse flex justify-center items-center'>
          <h2 className='skills-header text-[#6e65f6] uppercase text-center z-30'> <span className='text-2xl inline-block'>See my</span> skills</h2>
        </div> 

      </div>
      

  

      <div ref={containerScroll}  className='skills-container mb-40 h-[120vh]'>
        
         <div className='flex flex-col items-center justify-center '>
           
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
            
            <div className='skills justify-items-center place-items-center grid grid-cols-3'>

                <div className="skill javascript-cover w-50 h-50 flex items-center justify-center self-start opacity-0  ">
                  <div className='javascript flex items-center justify-center grayscale-100 hover:grayscale-0'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'/>
                  </div>
                </div>
                
                <div className="skill html-cover w-50 h-50 flex items-center justify-center self-start opacity-0">
                  <div className='html flex items-center justify-center grayscale-100 hover:grayscale-0'>
                    <img src='/assets/html.svg' />
                  </div>
                </div>
               
                <div className="skill css-cover w-50 h-50 flex items-center justify-center self-start opacity-0 " >
                  <div className='css flex items-center justify-center grayscale-100 hover:grayscale-0' >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg'/>
                  </div>
                </div>
                
                <div className="skill react-cover  w-50 h-50 flex items-center justify-center self-start mr-61 opacity-0">
                  <div className='react flex items-center justify-center grayscale-100 hover:grayscale-0' >
                    <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                  </div>
                </div>
                
                <div>
                    <h2 className='tech uppercase font-poppins text-[#6e65f6] font-semibold text-5xl self-end '>Skills&Tools </h2>
                </div>

                <div className="skill git-cover  w-50 h-50 flex justify-center items-center self-start ml-63.5 opacity-0">
                  <div className='git flex justify-center items-center grayscale-100 hover:grayscale-0'>
                   <img  src='/assets/git.svg'/>
                  </div>
                </div>

              
               <div className="skill github-cover w-50 h-50 flex items-center justify-center self-end opacity-0">
                  <div className='github flex items-center justify-center grayscale-100 hover:grayscale-0'>
                    <img  src='/assets/github.svg'/>
                  </div>
               </div>
               
                <div className="skill tailwind-cover w-50 h-50 flex items-center justify-center self-end opacity-0">
                    <div className='tailwind flex items-center justify-center grayscale-100 hover:grayscale-0'>
                      <img  src='/assets/tailwindcss.svg'/>
                    </div>
                </div>
                
                <div className="skill figma-cover w-50 h-50 flex items-center justify-center self-end opacity-0">
                   <div className='figma flex justify-center items-center grayscale-100 hover:grayscale-0'>
                     <img  src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'/>
                   </div> 
                </div>
            </div>

            
            {/* skills details */}
            <div className='skill-details absolute top-[923px] flex gap-10 w-[600px] text-sm text-center text-[#16134c] font-poppins  '>

                <div className='skills-kit hidden  justify-center items-center gap-10 '>          
                    <ul id='js-details' className='details w-[60%] h-[350px] p-14  flex flex-col gap-2 items-center justify-center rounded-full '>
                      <li>Strong understanding of core JavaScript concepts, including DOM manipulation, event handling, and asynchronous programming.</li>
                      <li>Experience with modern ES6+ features such as arrow functions, destructuring, promises, and async/await.</li>
                      <li>Developed interactive web applications using vanilla JavaScript and optimized performance for better user engagement.</li> 
                  </ul>
                </div>
                 
                <div className='skills-kit hidden  justify-center items-center gap-10'>    
                    <ul id='html-details' className='details  w-[60%] h-[350px] p-14  flex flex-col gap-2 items-center justify-center rounded-full'>
                      <li>Proficient in writing semantic, accessible, and SEO-friendly HTML5 markup.</li>
                      <li>Ensured cross-browser compatibility by writing clean, standards-compliant HTML code.</li>
                      <li>Collaborated with designers to translate wireframes and mockups into functional HTML prototypes.</li> 
                  </ul>
                </div>

                <div className='skills-kit hidden  justify-center items-center gap-10'>    
                    <ul className='details w-[60%] h-[350px] p-14  flex flex-col gap-2 items-center justify-center rounded-full '>
                      <li >Skilled in creating responsive and cross-browser-compatible layouts using CSS3, Flexbox, and Grid.</li>
                      <li>Implemented animations, transitions, and modern design techniques to enhance user experience.</li>
                      <li>Ensured cross-browser compatibility by using vendor prefixes and testing on multiple browsers (Chrome, Firefox, Safari, Edge).</li> 
                  </ul>
                </div>

                
                 <div className='skills-kit hidden  justify-center items-center gap-10'>    
                    <ul className='details w-[60%] h-[350px] p-14  flex flex-col gap-2 items-center justify-center rounded-full '>
                      <li>Built dynamic, reusable, and component-based user interfaces using React.js.</li>
                      <li>Proficient in state management using React Hooks (useState, useEffect) and Context API.</li>
                      <li>Experience with React Router for single-page application (SPA) navigation.</li> 
                  </ul>
                </div>

                 <div className='skills-kit hidden  justify-center items-center gap-10'>    
                    <ul className='details w-[60%] h-[350px] p-14  flex flex-col gap-2 items-center justify-center rounded-full '>
                      <li>Proficient in using Git for version control, including branching, merging, and pull requests.</li>
                      <li>Collaborated with teams using GitHub/GitLab for code reviews, issue tracking, and project management.</li>
                      <li>Maintained clean and organized repositories with clear commit messages and documentation.</li> 
                  </ul>
                </div>

                 <div className='skills-kit hidden  justify-center items-center gap-10'>    
                    <ul className='details w-[60%] h-[350px] p-14  flex flex-col gap-2 items-center justify-center rounded-full '>
                      <li>Proficient in using GitHub for version control, collaboration, and project management in software development workflows.</li>
                      <li>Skilled in creating and managing repositories for both personal and team projects, ensuring organized and efficient codebases.</li>
                      <li>Utilized pull requests (PRs) to review, discuss, and merge code changes, ensuring high-quality and maintainable code.</li> 
                  </ul>
                </div>

               

                <div className='skills-kit hidden  justify-center items-center gap-10'>    
                    <ul className='details w-[60%] h-[350px] p-14  flex flex-col gap-2 items-center justify-center rounded-full '>
                      <li>Proficient in using Tailwind CSS, a utility-first CSS framework, to rapidly build modern, responsive, and customizable user interfaces.</li>
                      <li>Skilled in leveraging Tailwind’s utility classes to style components directly in HTML.</li>
                      <li>Experienced in creating responsive designs using Tailwind’s breakpoint prefixes (e.g., sm:, md:, lg:, xl:, 2xl:).</li> 
                  </ul>
                </div>

                  <div className='skills-kit hidden  justify-center items-center gap-10'>    
                    <ul className='details w-[60%] h-[350px] p-14  flex flex-col gap-2 items-center justify-center rounded-full '>
                      <li>Proficient in using Figma for designing, prototyping, and collaborating on user interfaces and web applications.</li>
                      <li>Experienced in creating wireframes, mockups, and high-fidelity designs for websites.</li>
                      <li>Created interactive prototypes with transitions, animations, and clickable elements to demonstrate user flows and functionality.</li> 
                   </ul>
                 </div>
              </div>
           
            </div>  
        </div>
        <div className=" slogan flex flex-col items-center justify-center text-center mt-20  relative">
           <h2 className="market-title z-10">You want a team player who never stop learning?
            <a href="mailto:mohamedbahgat950@gmail.com" target="_blank">
               <span className="inline-block text-xl align-middle w-50 rounded-full bg-red-400 text-white mt-2 py-3">Let's connect
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-7 inline-block ml-3 bg-white rounded-full p-1 ">
                   <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                 </svg>
               </span>
            </a>           
           </h2> 
           <div className="w-50 h-50 absolute top-[25%] left-[40%] bg-[#d8ffb7] z-0 blur-[100px]" ></div>       
        </div> 
        <div>
           <Footer />
        </div>
    
    </div>

  )
}

export default Skills
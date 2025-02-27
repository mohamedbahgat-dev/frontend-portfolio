import { useEffect } from 'react';
import Skills from './Skills';


function About() {

  useEffect(()=>{

    const cards = document.querySelectorAll('.about-cards div')
    const sideCards = document.querySelectorAll('.side-cards span')
    

    cards.forEach((card, index)=> {
      card.addEventListener('click', function(){
        const style = window.getComputedStyle(card)
        const angel = style.getPropertyValue('rotate')
        
        //console.log(card.lastElementChild.textContent)
      
        if(angel[0] === '-'){

          card.style.transform = `rotate(${+angel[1]}deg)`
         }else {
          card.style.transform = `rotate(${-angel[0]}deg)`
         }

         const bottom = card.getBoundingClientRect().bottom
         const top = card.getBoundingClientRect().top
         const middlePoint = (bottom - top )/2

         
                  
         card.addEventListener('click', function(){ 
          card.style.transform = `translateX(-170vh) translateY(-${middlePoint}px) rotate(-100deg)`       
          card.style.transition = '2s ease-in-out'
          card.style.animation = 'fadeOut 2s ease-out'
          sideCards[index].textContent = card.lastElementChild.textContent
          sideCards[index].style.display = 'block'

          sideCards.forEach((sideCard, sideIndex)=> {
            sideCard.addEventListener('click', function(){
              if(sideIndex === index) {
                card.style.transform = `translateX(2vh)`
                sideCard.textContent = ''
                sideCard.style.display = 'none'             
              }
            })
          })       
         })
      })
    })
  })

  

  return (
    <div id='about' className=' h-[150vh] relative '>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='about-header inline-block text-5xl text-[#6e65f6] uppercase z-30'>About Me</h1> 
        </div>
        
        <div className='mt-20'>
          
           {/* mian display cards container */}
            <div className='about-cards flex flex-col justify-center items-center text-gray-400 '>

              <div className='flex flex-col items-center justify-center bg-[#f9c1c1] w-[420px] h-[500px]  rounded-4xl rotate-2 shadow-md shadow-[#c1bebe]'>
                <img className=' w-90 h-60 mt-4  mb-4 border-2 border-[#f7a4a4] rounded-3xl' src='../src/assets/learn.svg' />
                <p className='w-85 text-center'>When I'm not coding, you can find me Reading about and exploring new technologies, contributing to open-source projects, or learning a new skill.</p>
                <h2 className='text-center m-4 px-15 leading-11 uppercase text-[#e06e6e] font-bold'>Never Stop Learning</h2>
              </div>

               <div className='flex flex-col items-center justify-center bg-[#ffe2b4] rounded-4xl w-[420px] h-[500px]  -rotate-2 shadow-md shadow-[#c1bebe]'>
                <img className='w-90 mt-3 h-60 mb-5 border-2 rounded-3xl border-[#edc88b]' src='../src/assets/outcomes.svg' />
                <p className='w-90 text-center'>I thrive on turning ideas into reality and enjoy the challenge of building modern, intuitive web experiences that combine creativity and functionality</p>
                <h2 className='text-center m-5 uppercase text-[#e6a843] font-bold'>The Outcomes</h2>
              </div>

              <div className='flex flex-col items-center justify-center bg-[#dbe3cd] rounded-4xl w-[420px] h-[500px]  -rotate-4 shadow-md shadow-[#c1bebe]'>
                <img className='w-90 mt-4 h-60 mb-5 border-2 rounded-3xl border-[#b6d089]' src='../src/assets/team.svg' />
                <p className='w-90 text-center'>I recently completed the ALX Foundation program, where I strengthened my problem-solving abilities and gained experience in collaborative coding environments.</p>
                <h2 className='text-center m-5 uppercase font-bold text-[#5b782a]'>On the road</h2>
              </div>

              <div className='flex flex-col items-center justify-center bg-[#ffbba2] rounded-4xl w-[420px] h-[500px]  -rotate-2 translate-x-2 shadow-xl shadow-[#c1bebe]'>
                <img className=' w-90 mt-2 h-60 mb-5 border-2 border-[#f3a284] rounded-3xl' src='../src/assets/starts.svg' />
                <p className='w-80 text-center'>Through dedicated self-study, online Learning Programs, and hands-on projects, I've honed my skills in HTML, CSS, JavaScript, React.</p>
                <h2 className='text-center m-5 uppercase  font-bold text-[#e0683d]'>Journey Starts</h2>
              </div>

               <div className='flex flex-col items-center justify-center bg-[#f2ddc3] rounded-4xl w-[420px] h-[500px]  -rotate-3 -translate-y-2 shadow-lg shadow-[#c1bebe]'>
                <img className='w-90 mt-2 h-60 mb-5 border-2 border-[#d7bd9c] rounded-3xl' src='../src/assets/twist.svg' />
                <p className='w-80 text-center'>This curiosity turned into a passion for creating beautiful, user-friendly, and responsive websites focusing on simplicity, usability, and modern aesthetics.</p>
                <h2 className='text-center m-5 uppercase font-bold text-[#90714d]' >The twist</h2>
              </div>

              <div className=' flex flex-col items-center justify-center bg-[#f9f9e3] rounded-4xl w-[420px] h-[500px]  rotate-3 translate-y-2 shadow-lg shadow-[#c1bebe]'>
                <img className='w-90 h-60 mb-5 border-2 border-[#efefad] rounded-3xl' src='../src/assets/passion.svg' />
                <p className='w-75 text-center'>My journey into web development began with a curiosity for how websites work, and it quickly turned into a deep love for coding and design.</p>
                <h2 className='text-center m-5 uppercase font-bold text-[#95955a]'>The Start</h2>
              </div>
            </div>

            {/* side cards container */}
            <div className='side-cards  w-60 relative top-[40px] flex flex-col-reverse text-black'>
              <span className='hidden bg-[#f9c1c1] transition-all duration-500'></span>
              <span className='hidden bg-[#ffe2b4]'></span>
              <span className='hidden bg-[#dbe3cd]'></span>
              <span className='hidden bg-[#ffbba2]'></span>
              <span className='hidden bg-[#f2ddc3]'></span>
              <span className='hidden bg-[#f9f9e3] transition-all duration-1000'></span>
            </div>
        </div>
        <Skills />
    </div>
  )
}

export default About;
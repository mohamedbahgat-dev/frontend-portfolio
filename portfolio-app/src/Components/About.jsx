import Footer from "./Footer";


function About() {
  
  return (
    <div id='about' className=' h-[130vh] relative max-[600px]:mt-10'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='about-header  text-4xl font-semibold text-[#6e65f6] uppercase  '>About Me</h1> 
        </div>
        
        <div className='mt-20'>
          
           {/* mian display cards container */}
            <div className='about-cards flex flex-col justify-center items-center gap-y-20 text-gray-400 '>

               <div className=' flex flex-col items-center justify-center bg-[#f9f9e3] rounded-4xl shadow-lg shadow-[#c1bebe]'>
                <img className='w-90 h-60 mb-5 border-2 border-[#efefad] rounded-3xl' src='/assets/passion.svg' />
                <p className='w-75 text-center'>My journey into web development began with a curiosity for how websites work, and it quickly turned into a deep love for coding and design.</p>
                <h2 className='text-center m-5 uppercase font-bold text-[#95955a]'>The Start</h2>
              </div>

               <div className='flex flex-col items-center justify-center bg-[#f2ddc3] rounded-4xl shadow-lg shadow-[#c1bebe]'>
                <img className='w-90 mt-2 h-60 mb-5 border-2 border-[#d7bd9c] rounded-3xl' src='/assets/twist.svg' />
                <p className='w-80 text-center'>This curiosity turned into a passion for creating beautiful, user-friendly, and responsive websites focusing on simplicity, usability, and modern aesthetics.</p>
                <h2 className='text-center m-5 uppercase font-bold text-[#90714d]' >The twist</h2>
              </div>

               <div className='flex flex-col items-center justify-center bg-[#ffbba2] rounded-4xl shadow-xl shadow-[#c1bebe]'>
                <img className=' w-90 mt-2 h-60 mb-5 border-2 border-[#f3a284] rounded-3xl' src='/assets/starts.svg' />
                <p className='w-80 text-center'>Through dedicated self-study, online Learning Programs, and hands-on projects, I've honed my skills in HTML, CSS, JavaScript, React.</p>
                <h2 className='text-center m-5 uppercase  font-bold text-[#e0683d]'>Journey Starts</h2>
              </div>

               <div className='flex flex-col items-center justify-center bg-[#dbe3cd] rounded-4xl shadow-md shadow-[#c1bebe]'>
                <img className='w-90 mt-4 h-60 mb-5 border-2 rounded-3xl border-[#b6d089]' src='/assets/team.svg' />
                <p className='w-90 text-center'>I recently completed the ALX Foundation program, where I strengthened my problem-solving abilities and gained experience in collaborative coding environments.</p>
                <h2 className='text-center m-5 uppercase font-bold text-[#5b782a]'>On the road</h2>
              </div>

               <div className='flex flex-col items-center justify-center bg-[#ffe2b4] rounded-4xl shadow-md shadow-[#c1bebe]'>
                <img className='w-90 mt-3 h-60 mb-5 border-2 rounded-3xl border-[#edc88b]' src='/assets/outcomes.svg' />
                <p className='w-90 text-center'>I thrive on turning ideas into reality and enjoy the challenge of building modern, intuitive web experiences that combine creativity and functionality</p>
                <h2 className='text-center m-5 uppercase text-[#e6a843] font-bold'>The Outcomes</h2>
              </div>

              <div className='flex flex-col items-center justify-center bg-[#f9c1c1] rounded-4xl shadow-md shadow-[#c1bebe] mt-20'>
                <img className=' w-90 h-60 mt-4  mb-4 border-2 border-[#f7a4a4] rounded-3xl' src='/assets/learn.svg' />
                <p className='w-85 text-center'>When I'm not coding, you can find me Reading about and exploring new technologies, contributing to open-source projects, or learning a new skill.</p>
                <h2 className='text-center m-4 px-15 leading-11 uppercase text-[#e06e6e] font-bold'>Never Stop Learning</h2>
              </div>
            </div>

        </div>
        
        <div className="slogan flex flex-col items-center justify-center text-center mt-60 relative ">
           <h2 className="market-title">You want a custom website that fit your business?
            <a href="mailto:mohamedbahgat950@gmail.com" target="_blank">
               <span className="inline-block text-xl align-middle  w-50 rounded-full bg-red-400 text-white py-3 ">Let's connect
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-7 inline-block ml-3 bg-white rounded-full p-1 ">
                   <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                 </svg>
               </span>
            </a>           
           </h2> 
           <div  className="w-50 max-[600px]:w-20 h-50 absolute top-[25%]  max-[600px]:left-[15%]  bg-yellow-300 -z-1 blur-[100px]" ></div>       
         
        </div> 
        
        <Footer />

    </div>
  )
}

export default About;
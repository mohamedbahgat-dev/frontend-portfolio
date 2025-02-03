import React from 'react'

function About() {
  return (
    <div className='about border-b-1 border-gray-500'>
        <h1 className='inline-block mx-30 mt-10 font-poppins text-[30px] font-light uppercase text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text'>About Me</h1>
        <div className='flex justify-around items-center min-h-[60vh]'>
            <div className='max-w-[50%] ml-20 flex flex-col gap-2 text-gray-400'>
            
                <p>Hi, I'm Mohamed, a self-taught front-end developer with a passion for creating beautiful, user-friendly, and responsive websites. My journey into web development began with a curiosity for how websites work, and it quickly turned into a deep love for coding and design.</p>
                    
                <p>Through dedicated self-study, online courses, and hands-on projects, I've honed my skills in HTML, CSS, JavaScript, React. I recently completed the ALX Foundation program, where I strengthened my problem-solving abilities and gained valuable experience in collaborative coding environments.
                 I thrive on turning ideas into reality and enjoy the challenge of creating seamless, visually appealing, and functional web experiences.</p> 

                <p> When I'm not coding, you can find me Reading about and exploring new technologies, contributing to open-source projects, or learning a new skill kit. I'm always eager to learn, grow, and take on new challenges in the ever-evolving world of web development.</p>    

                <p>  I'm currently looking for opportunities to bring my skills to a dynamic team and contribute to building innovative digital solutions. Let's connect and create something amazing together!</p>
            </div>
            <div>
                <img className='w-76 h-76 rounded-full mr-20' src='../src/assets/myphoto.jpg' />
            </div>

        </div>
    </div>
  )
}

export default About;
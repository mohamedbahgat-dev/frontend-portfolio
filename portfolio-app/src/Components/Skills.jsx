import React from 'react'

function Skills() {
  return (
    <div className='min-h-[60vh] border-b-1 border-gray-500'>
       <h1 id='skills' className='inline-block mx-20 mt-10 font-poppins text-[30px] font-light uppercase text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text'>Skills</h1>
       <div className='flex flex-col mt-10 items-center justify-center'>
            <h2 className='font-poppins text-xl'>Skill kits and Technologies</h2>
            <div className='skills relative flex justify-center items-center max-w-[450px] gap-8 flex-wrap mt-10'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'/>
                <img src='../src/assets/html.svg' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg'/>
                <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg'/>
                <img className='bg-white rounded-full' src='../src/assets/github.svg'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'/>
            </div>
       </div>       
    </div>
  )
}

export default Skills
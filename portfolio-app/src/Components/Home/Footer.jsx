import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center '>
         <div className='flex justify-between items-center mt-30 border-t-1 border-t-gray-900 h-25 w-[80%]'>         
                <div className="flex gap-10 text-lg text-gray-700">     
                  <a href="#" className="fa fa-linkedin border-1 rounded-full w-10 h-10 px-3 py-2"></a>
                  <a href="#" className="fa fa-github border-1 rounded-full w-10 h-10 px-3 py-2.5"></a>
                  <a href="#" className="fa fa-envelope border-1 rounded-full w-10 h-10 px-2.5 py-2.5"></a>
                  <a href="#" className="fa fa-telegram border-1 rounded-full w-10 h-10 px-2.5 py-2.5"></a>
                </div>
                <h3 className='text-xl font-thin'>&copy;2025 ALL rights Reserved Mohamed Bahgat</h3>   
                <h3 className='flex items-center text-sm border border-gray-900 rounded-r-full rounded-l-full px-5 py-2'>Created By <img className='w-10 mr-1' src='../src/assets/mylogo.svg' /><h4> Mohamed Bahgat</h4></h3>
        </div>

    </div>
  )
}

export default Footer
import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center '>
         <div className='flex justify-between items-center max-[600px]:flex-col max-[600px]:gap-y-10  min-[600px]:flex-col min-[600px]:gap-y-10  min-[992px]:flex-row mt-30 border-t-1 border-t-gray-900 h-25 w-[80%]'>         
                <div className="flex gap-10 text-lg text-gray-700 max-[600px]:mt-10 min-[600px]:mt-10 min-[992px]:mt-0">     
                  <a href="https://www.linkedin.com/in/mohamed-bahgat-a589b615b" target='_blank' className="fa fa-linkedin border-1 rounded-full w-10 h-10 px-3 py-2"></a>
                  <a href="https://github.com/mohamedbahgat-dev" target='_blank' className="fa fa-github border-1 rounded-full w-10 h-10 px-3 py-2.5"></a>
                  <a  href="mailto:mohamedbahgat950@gmail.com" target="_blank" className="fa fa-envelope border-1 rounded-full w-10 h-10 px-2.5 py-2.5"></a>
                  <a href="https://wa.me/543198860" className="fa fa-whatsapp border-1 rounded-full w-10 h-10 px-2.5 ml-1 py-2.5 text-center"></a>
                </div>
                <h3 className='text-xl font-thin max-[600px]:w-70 text-center'>&copy;2025 ALL rights Reserved Mohamed Bahgat</h3>   
                <h3 className='flex items-center text-sm border border-gray-900 rounded-r-full rounded-l-full px-5 py-2'>Created By <img className='w-10 mr-1' src='/assets/mylogo.svg' /><span> Mohamed Bahgat</span></h3>
         </div>

    </div>
  )
}

export default Footer
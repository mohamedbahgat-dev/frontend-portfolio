import React from 'react'
import Footer from './Footer'

function Contacts() {
  return (

    <div className='contact'>
        
        <div className='h-[100vh] flex justify-center items-center '>
            <div className='contact-form p-10 mt-40 rounded-4xl max-[600px]:w-[80vw] flex flex-col justify-center items-center'>
                 <h2 className='inline-block mb-5 pb-2 font-poppins text-xl text-[#6e65f6] font-bold border-b-2'>Get in touch</h2>
                 <form action="https://api.web3forms.com/submit" method="POST"  className=' form flex flex-col w-86 justify-center items-center max-[600px]:w-50 rounded-2xl'>
                    <input type='hidden' name='access_key' value='779729dc-1f97-4813-9ef6-5009a95ad9fd'/>
                    <input type='text' name='name' placeholder='Your Name' required />
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' className='h-[100px]' placeholder='Your Message'></textarea>
                    <button className=' w-24 m-5 self-center bg-[#6e65f6] text-white rounded-xl py-1' type='submit'>Submit</button>
                 </form>
            </div>  
        </div>
        <Footer />
    </div>
  )
}

export default Contacts
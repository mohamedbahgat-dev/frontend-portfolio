import React from 'react'

function Contacts() {
  return (

    <div>
        <h1 id='contact' className='inline-block mx-20 mt-10 font-poppins text-[30px] font-light uppercase text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text'>Contacts</h1>
        <div className=' flex justify-around items-center gap-10 my-15 mx-30'>
            <div>
                 <h2 className='inline-block mb-5 pb-2 font-poppins text-xl text-sky-200 border-b-2'>Get in touch</h2>
                 <form action="https://api.web3forms.com/submit" method="POST"  className=' project form flex flex-col w-86 p-3 rounded-2xl'>
                    <input type='hidden' name='access_key' value='779729dc-1f97-4813-9ef6-5009a95ad9fd'/>
                    <input type='text' name='name' placeholder='Your Name' required />
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' className='h-[100px]' placeholder='Your Message'></textarea>
                    <button className='cv w-24 m-5 self-center rounded-xl py-1' type='submit'>Submit</button>
                 </form>
            </div>  
            <div>
                <h2 className='text-center mb-5 pb-2 font-poppins text-xl text-sky-200' >Social Media</h2>
                <div className='mt-5 flex gap-4'>
                    <a href="#" className="fa fa-facebook contact"></a>
                    <a href="#" className="fa fa-twitter contact"></a>
                    <a href="#" className="fa fa-linkedin contact"></a>
                    <a href="#" className="fa fa-github contact"></a>
                    <a href="#" className="fa fa-instagram contact"></a>
                    <a href="#" className="fa fa-envelope contact"></a>
                </div>
                
            </div> 
        </div>
    </div>
  )
}

export default Contacts
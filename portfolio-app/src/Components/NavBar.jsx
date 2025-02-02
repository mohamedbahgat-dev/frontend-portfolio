

function NavBar() {
  return (
    <div>
        <div>
            <nav className='flex justify-between items-center flex-wrap px-10 py-5 mt-10 mx-25  border rounded-xl text-white font-poppins font-light uppercase'>
                <h3>Mohamed Bahgat</h3>
                <div className='flex flex-wrap gap-x-10'>
                    <span>About Me</span>
                    <span>Projects</span>
                    <span>Education</span>
                    <span>Contact</span>
                </div>
                <button className='cv px-[20px] py-[4px] rounded-[20px] shadow-[0px_0px_4px_0px] shadow-[#fa61d68c]'>Download CV</button>   
            </nav>
        </div>
    </div>
  )
}

export default NavBar;
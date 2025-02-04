

function NavBar() {
  return (
    <div>
        <div>
            <nav className='flex justify-between items-center flex-wrap px-10 py-5 mt-10 mx-25  border rounded-xl text-white font-poppins font-light uppercase'>
                <h3 className="font-medium">Mohamed Bahgat</h3>
                <div className='flex flex-wrap gap-x-10'>
                    <a href="./#about">About Me</a>
                    <a href="./#skills">Skills</a>
                    <a href="./#projects">Projects</a>
                    <a href="./#education">Education</a>
                    <a href="./#contacts">Contact</a>
                </div>
                <button className='cv px-[20px] py-[4px] rounded-[20px] shadow-[0px_0px_4px_0px] shadow-[#fa61d68c]'>Download CV</button>   
            </nav>
        </div>
    </div>
  )
}

export default NavBar;
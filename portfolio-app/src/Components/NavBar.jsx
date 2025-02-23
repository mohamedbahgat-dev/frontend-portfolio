

function NavBar() {
  return (
    <div>
        <div className="fixed top-0 w-full z-40">
            <nav className='navbar flex justify-between items-center flex-wrap p-10 text-[#6e65f6] font-poppins font-medium uppercase'>
                
                <div className='flex flex-wrap items-center justify-center gap-x-10 mr-15'>
                    
                    <a href="./#skills">Skills</a>
                    <a href="./#services">Services</a>
                    <a href="./#projects">Projects</a>
                    <a href="./#contacts">Contact</a>
                </div>
                <div className="flex gap-5 text-sky-800 ">
                  <a href="#" className="fa fa-linkedin hover:text-bg-amber-400"></a>
                  <a href="#" className="fa fa-github"></a>
                  <a href="#" className="fa fa-envelope"></a>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default NavBar;
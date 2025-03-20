import { NavLink } from "react-router-dom";
import { useRef } from "react";


function NavBar() {


  const smallMenuRef = useRef()
  const menuNameRef = useRef()
  const closeMenuRef = useRef()
  const menuIconRef = useRef()

  
  
  const HandleMenuClick  = ()=> {
    smallMenuRef.current.className = 'max-[600px]:flex min-[600px]:flex  max-[768px]:flex flex-col gap-5 w-[500px] h-[80vh] pl-5 pt-5 absolute top-20 left-0 '
    closeMenuRef.current.className = 'block hover:cursor-pointer'
    menuNameRef.current.className = 'hidden'
    menuIconRef.current.style.fill = '#ff8000'
  
  }

  const handleMenuClose = ()=> {
    smallMenuRef.current.className = 'hidden'
    closeMenuRef.current.className = 'hidden'
    menuNameRef.current.className = 'block '
     menuIconRef.current.style.fill = 'none'
     
  }

  return (
    <div >
        <div className="navbar fixed top-0 w-full z-40">
            <nav className='flex justify-between items-center flex-wrap px-8 py-6.5 text-[#6e65f6] uppercase '>
                <div className="flex gap-10 items-center">
                  <div className="rounded-full flex justify-center items-center">
                     <h2 className="name-logo text-[#424cd8] font-poppins font-bold text-4xl tracking-[-4px]" >MB</h2> 
                  </div>
                 
                  {/* className="w-15 mix-blend-multiply " src="../src/assets/mylogo.svg"/> */}
                  <span className="tracking-wide underline">mohamedbahgat950@gmail.com</span>
                </div>
                
                <div className="max-[600px]:flex justify-self-end gap-2 max-[992px]:hidden">
                   <div>
                      <h2 className="menu-name max-[992px]:hidden transition-all duration-100" ref={menuNameRef}>Menu</h2>
                      <h2 className="hidden absolute top-10 menu-close " ref={closeMenuRef} onClick={handleMenuClose}>Close</h2>
                   </div>
                 
                   <button className="menu-btn " onClick={HandleMenuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" ref={menuIconRef}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                   </button>
                </div>
               


                  {/* samll screens menu */}
                <div className="small-sc-menu hidden flex-col gap-5 w-[500px] h-[80vh] pl-5 pt-5 absolute top-20 left-0" ref={smallMenuRef}>
                  <h2>
                       <NavLink to={'/'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Home
                       </NavLink>
                    </h2>
                     
                    
                     <h2>
                       <NavLink to={'/skills'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Skills
                       </NavLink>
                    </h2>

                     <h2>
                       <NavLink to={'/services'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Services
                       </NavLink>
                    </h2>

                     <h2>
                       <NavLink to={'/projects'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Projects
                       </NavLink>
                    </h2>

                     <h2>
                       <NavLink to={'/contacts'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Contacts
                       </NavLink>
                    </h2>     
                </div>

                  {/* main menu */}
                <div className='main-menu flex flex-wrap items-center justify-center gap-x-5 '>
                    <h2>
                       <NavLink to={'/'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Home
                       </NavLink>
                    </h2>
                     
                    
                     <h2>
                       <NavLink to={'/skills'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Skills
                       </NavLink>
                    </h2>

                     <h2>
                       <NavLink to={'/services'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Services
                       </NavLink>
                    </h2>

                     <h2>
                       <NavLink to={'/projects'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Projects
                       </NavLink>
                    </h2>

                     <h2>
                       <NavLink to={'/contacts'}
                                className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-[#6e65f6]'}`}>
                         Contacts
                       </NavLink>
                    </h2>     
                </div>
                
            
            </nav>
        </div>
    </div>
  )
}

export default NavBar;
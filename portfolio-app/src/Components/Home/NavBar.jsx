import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <div className="navbar fixed top-0 w-full z-40">
            <nav className='flex justify-between items-center flex-wrap px-5 py-6.5 text-[#6e65f6] uppercase'>
                <div className="flex gap-10 items-center">
                  <img className="w-15 mix-blend-multiply " src="../src/assets/mylogo.svg"/>
                  <span className="tracking-wide underline">mohamedbahgat950@gmail.com</span>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-x-5'>
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
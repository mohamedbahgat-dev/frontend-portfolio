import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <NavBar />
        <Outlet />
     

    </div>
  )
}

export default Layout
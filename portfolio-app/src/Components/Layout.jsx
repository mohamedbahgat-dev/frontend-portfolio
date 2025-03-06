import NavBar from './Home/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Home/Footer'

function Layout() {
  return (
    <div>
        <NavBar />
        <Outlet />
     

    </div>
  )
}

export default Layout
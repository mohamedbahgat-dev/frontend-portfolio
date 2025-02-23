import NavBar from "./Components/NavBar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/projects"
import Services from "./Components/Services"
import Contacts from "./Components/Contacts"

function App() {
 

  return (
    <>
      <div>  
        <Hero />
        <About />
       
        <Services />
        <Projects /> 
        <Contacts />
      </div>
    </>
  )
}

export default App;

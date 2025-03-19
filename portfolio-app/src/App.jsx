import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import HomePage from "./Components/Home/HomePage"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Services from "./Components/Services"
import Contacts from "./Components/Contacts"

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />}/>
            <Route path="skills" element={<Skills />}/>
            <Route path="services" element={<Services />}/>
            <Route path="projects" element={<Projects />}/>
            <Route path="contacts" element={<Contacts />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

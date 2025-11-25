import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
import ProjectsSection from './components/Projects'
import ServiceSection from './components/Service'
import Contact from './components/Conatct'
import Footer from  './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection/>
      <ServiceSection />
      <Contact />
      <Footer/>
    </>
  )
}

export default App

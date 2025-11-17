import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects'
import Service from './components/Service'
import Contact from './components/Conatct'
import Footer from  './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Service />
      <Contact />
      <Footer/>
    </>
  )
}

export default App

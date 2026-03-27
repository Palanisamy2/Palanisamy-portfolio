import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ParticleBackground from './Components/ParticleBackground'

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
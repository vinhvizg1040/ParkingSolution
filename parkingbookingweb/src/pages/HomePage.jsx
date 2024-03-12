import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col mx-1 lg:mx-16 lg:my-12'>
        <Hero />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
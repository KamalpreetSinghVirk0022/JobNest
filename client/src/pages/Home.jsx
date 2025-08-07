import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import FotterSection from '../components/FotterSection'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <JobListing />
        <FotterSection />
        
    </div>
  )
}

export default Home
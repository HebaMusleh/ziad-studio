import React from 'react'
import Hero from './Hero'
import Footer from '../../components/Footer'
import Packages from './packages'
import MoreService from './MoreService'
import Supporter from './Supporter'

const Home = () => {
  return (
    <div>
      <Hero />
      <Packages />
      <MoreService />
      <Supporter />
      <Footer />
    </div>
  )
}

export default Home
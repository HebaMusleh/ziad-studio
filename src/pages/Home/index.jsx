import React from 'react'
import Hero from './Hero'
import Footer from '../../components/Footer'
import Packages from './packages'
import MoreService from './MoreService'
import Supporter from './Supporter'
import Work from './Work'

const Home = () => {
  return (
    <div>
      <Hero />
      <Packages />
      <MoreService />
      <Supporter />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
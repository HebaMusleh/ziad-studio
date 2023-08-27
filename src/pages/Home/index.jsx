import React from 'react'
import Header from '../../components/Header'
import Hero from './Hero'
import Footer from '../../components/Footer'
import Packages from './packages'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Packages/>
        <Footer/>
    </div>
  )
}

export default Home
import React from 'react'

import Hero from './Hero'
import Packages from './packages'
import MoreService from './MoreService'
import Supporter from './Supporter'
import Work from './Work'
import Ads from './Ads'
import Steps from './Steps'

import Footer from '../../components/Footer'
import ContactModal from '../ContactModal'
import { useModal } from '../../context/modalContext'
import US from './US'
import Services from './Services'

const Home = () => {
  const { isModalOpen, closeModal } = useModal();
  return (
    <>
      <Hero />
      <US/>
      <Services/>
      <Ads />
      <Supporter />
      <Packages />
      <Steps />
      <MoreService />
      <Work />
      <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
      <Footer />
    </>
  )
}

export default Home
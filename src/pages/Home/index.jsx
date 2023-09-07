import React from 'react'

import Hero from './Hero'
import Packages from './packages'
import MoreService from './MoreService'
import Supporter from './Supporter'
import Work from './Work'
import Ads from './Ads'
import Steps from './Steps'
import styled from 'styled-components'
import ContactModal from '../ContactModal'

import { useModal } from '../../context/modalContext'
import Footer from '../../components/Footer'

const Style = styled.div`
@media (max-width: 2946px) {
  padding-top:0;
}
@media (max-width: 1940px) {
  padding-top:5.5%;
}
@media (max-width: 904px) {
  padding-top:0;
}
`
const Home = () => {
  const { isModalOpen, closeModal } = useModal();
  return (
    <>
      <Style>
        <Hero />
        <Ads />
        <Supporter />
        <Packages />
        <Steps />
        <MoreService />
        <Work />
        <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
      </Style>
      <Footer />
    </>
  )
}

export default Home
import React from 'react'

import Hero from './Hero'
import Packages from './packages'
import MoreService from './MoreService'
import Supporter from './Supporter'
import Work from './Work'
import Ads from './Ads'
import US from './US'
import Steps from './Steps'
import  styled  from 'styled-components'

const Style = styled.div`
padding-top:7%;
@media (max-width: 768px) {
  padding-top:10%;
}
@media (max-width: 480px) {
  padding-top:0;
}
`
const Home = () => {
  return (
    <Style>
      <Hero />
      <US />
      <Ads />
      <Supporter />
      <Packages />
      <Steps />
      <MoreService />
      <Work />
    </Style>
  )
}

export default Home
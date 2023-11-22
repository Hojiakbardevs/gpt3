import React from 'react'
import logo1 from './../img/logo/atlassian.svg'
import logo2 from './../img/logo/dropbox.svg'
import logo3 from './../img/logo/google.svg'
import logo4 from './../img/logo/shopify.svg'
import logo5 from './../img/logo/slack.svg'
import { WrapperBrand } from '../style'

const Brand = () => {
  return (
    <WrapperBrand className="section__padding">
      <img src={logo1} alt="" />
      <img src={logo2} alt="" />
      <img src={logo3} alt="" />
      <img src={logo4} alt="" />
      <img src={logo5} alt="" />
    </WrapperBrand>
  )
}

export default Brand
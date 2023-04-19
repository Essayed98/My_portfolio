import React from 'react'
import './header.css'
import Cv from './Cv'
import HeaderSocials from './HeaderSocials'
import Me from '../../assests/me3.png'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'am </h5>
        <h1>Essayed Ben Kram</h1>
        <h5 className="text-ligth">Fullstack developer</h5>
        <Cv />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt=""/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './footer.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useState } from 'react'
const Footer = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <footer>
      <a href='' className='footer__logo'>Essayed</a>
      <ul className="permalinks">
      <li><a href='#' >Home</a></li>
        <li><a href='#about' >About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact' >Contact Us</a></li>
      </ul>
      <div className="footer footer__socials">
        <a href="mailto:bkessayed@gmail.com" target="__blank"><AiOutlineMail /></a>
        <a href='https://wa.me/+21621195445' target="__blank"><AiOutlineWhatsApp /></a>
        <a href='https://www.linkedin.com/in/essayed-ben-kram-b148b5196/' target="__blank"><AiFillLinkedin /></a>
      </div>
      <div className="Footer__copyright">
        <small>Essayed BEN KRAM. All rigths reserved</small>
      </div>
    </footer>
  )
}

export default Footer
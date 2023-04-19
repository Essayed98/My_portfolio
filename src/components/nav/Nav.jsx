import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {AiOutlineCustomerService} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
   <nav>
    <a href="#"  onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#' ? 'active' :''}><AiOutlineUser/></a>
    <a href="#exprience" onClick={()=>setActiveNav('#exprience')} className={activeNav === '#' ? 'active' :''}><AiFillBook/></a>
    <a href="#services"onClick={()=>setActiveNav('#services')} className={activeNav === '#' ? 'active' :''}><AiOutlineCustomerService/></a>
    <a href="#contact"onClick={()=>setActiveNav('#contact')} className={activeNav === '#' ? 'active' :''}><AiOutlineMessage/></a>


   </nav>
  )
}

export default Nav
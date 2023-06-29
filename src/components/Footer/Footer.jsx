import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt=""  style={{width:'100%'}}/>
      <div className="f-content">
        <span>allanithin13@gmail.com</span>
      </div>

      <div className="f-icons">
        <Github color='black' size='3rem'/>
        <Linkedin color='black' size='3rem'/>
      </div>
    </div>
  )
}

export default Footer
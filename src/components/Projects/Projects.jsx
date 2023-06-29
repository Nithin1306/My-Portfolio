import React from 'react'
import './Projects.css'
import Heartemoji from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

const Projects = () => {
  return (
    <>
    <div className="projects" id='projects'>
      <div className="description">
        <span>
          My Projects<br/>
        </span>

        <span>These are my Projects which I had done based upon my skills<br/></span>
        <a href='https://github.com/Nithin1306'>
        <button className="button p-button1">My Github Profile</button>
        </a>
        <a href='https://www.linkedin.com/in/nithinreddy1306'>
        <button className="button p-button2">My Likedin Profile</button>
        </a>
      </div>
      <div className="cards">
        <div style={{left: '14rem'}}>
          <Card
        emoji={Heartemoji}
        heading={'Lung Cancer Detection'}
        text={'Ai model which predicts type of Lung cancer '}
        link={'https://github.com/Nithin1306/Lung-Cancer-Detection'}
        />
        </div>
        <div style={{top:'12rem',left:'-4rem'}}>
          <Card 
          emoji={Glasess}
           heading={'Video Conference App'}
          text={'A Conference app developed using React and WEBRTC '}
          link={'https://github.com/Nithin1306/Video-Conferencing-App'}
          />
        </div>

        <div style={{top:'20rem',left:'14rem'}}>
          <Card 
          emoji={Humble}
           heading={'Bus Booking System'}
          text={'A desktop application built by using Java and Mysql to book bus'}
          link={'https://www.slideshare.net/gaurav9616rai/online-bus-ticket-booking-234407392'}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects
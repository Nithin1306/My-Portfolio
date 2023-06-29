import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png.png'
import crown from '../../img/crown.png'
import glassemoji from '../../img/glassesimoji.png'
import thumbup from '../../img/thumbup.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <>
    <div className="i-intro">
       <div className="i-left">
        <div className="i-name">
            <span>Hello! I am </span>
            <span>A. Nithin Sreeroop Reddy</span>
            <span>I am an AIML enthusiast seeking a job role
where I can effectively showcase my talents
and contribute to the growth of the company I
join</span>



        </div>

        <div className="i-icons">
          <a href='https://github.com/Nithin1306'>
          <img src={Github} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/nithinreddy1306/'>
          <img src={Linkedin} alt="" />
          </a>
        </div>
        </div> 
       <div className="i-right">
       <img src={Vector1} alt="" />
       <img src={Vector2} alt="" />
       <img src={Boy} alt="" />
       <img src={glassemoji} alt="" />

       <div style={{top:'-4%', left:'68%'}} className='floating-div'>
        <FloatingDiv image={crown} txt = 'Hackathon Runnerup'/>
       </div>
       <div style={{top:'18rem', left:'0rem' }} className='floating-div'>
       <FloatingDiv image={thumbup} txt = 'Student'/>
       </div>


       <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
       <div className="blur" style={{
        background:'#C1F5FF',
        top:'17rem',
        width: '21rem',
        height: '11rem',
        left: '-9rem'

       }}></div>
       </div>
       </div>
    </>
  )
}

export default Intro
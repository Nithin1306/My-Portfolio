import React from 'react'
import './Card.css'

const Card = ({emoji,heading,text,link}) => {
  return (
    <>
    <div className="card" >
        <img src={emoji} alt="" />
        <span>{heading}<br/></span>
        <span>{text}</span>
        <a href={link}>
        <button className="c-button">Link</button>
        </a>
    </div>
    
    </>
  )
}

export default Card
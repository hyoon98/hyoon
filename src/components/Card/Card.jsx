import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

export default function Card({cover, title, description, link}) {
    let navigate=useNavigate();
  return (
    <div className='Card' onClick={()=>{
        navigate(link)
    }}>
        <img className='cover' src={cover}/>
        <h2 className='card-title'>{title}</h2>
        <p className='description'>{description}</p>
    </div>
  )
}

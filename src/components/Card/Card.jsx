import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

export default function Card({cover, title, desc, link}) {
    let navigate=useNavigate();
  return (
    <div className='Card' onClick={()=>{
        navigate('/blog/'+link)
    }}>
        <img alt="" className='cover' src={cover}/>
        <h2 className='card-title'>{title}</h2>
        <p className='description'>{desc}</p>
    </div>
  )
}

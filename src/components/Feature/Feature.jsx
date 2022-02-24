import React from 'react'
import './Feature.css'
import { useNavigate } from 'react-router-dom'

export default function Feature({cover,title,desc,link}) {
  let navigate=useNavigate();
  return (
    <div className="Feature" onClick={()=>{
        navigate('/blog/'+link)
    }}>
        <img alt="" className='feature-img' src={cover}/>
        <div className='feature-text'>
            <h1 className='feature-title'>{title}</h1>
            <p className='feature-title'>{desc}</p>
        </div>
    </div>
  )
}

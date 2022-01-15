import React,{useState} from 'react'
import './Card.css'
export default function Card(props) {

    const [show,setShow]=useState(false);


    return (
        <div className='card-container' onMouseEnter={()=>setShow(true) } onMouseLeave={()=>setShow(false)}>
            <a href={props.link}>
                <div className='image-container'>
                    <img className='project-img' src={props.image} alt=''/>
                </div>
                {show &&(
                <div className='hover-container'>
                    <h1 className='title'>{props.children}</h1>
                </div>
                )}
            </a>
        </div>
    )
}

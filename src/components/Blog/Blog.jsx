import React from 'react'
import './Blog.css'
import Card from '../Card/Card'
import examplecard from '../../assets/examplecard.jpg'

export default function Blog() {
  return (
    <div className='Blog'>
      <Card cover={examplecard} title="Test" desc="Just testing"/>
    </div>
  )
}

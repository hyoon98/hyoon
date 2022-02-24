import React from 'react'
import './Blog.css'
import Card from '../Card/Card'
import examplecard from '../../assets/examplecard.jpg'

export default function Blog() {
  return (
    <div className='Blog'>
      <h1 className='blog-title'>Posts</h1>
      <hr className='divider'/>
      <Card cover={examplecard} title="Test" desc="Just testing"/>
    </div>
  )
}

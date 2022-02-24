import React,{useEffect,useState} from 'react'
import './Blog.css'
import Card from '../Card/Card'
import { useQuery, gql } from '@apollo/client'
import example from '../../assets/examplecard.jpg'

const GET_POSTS=gql`
query{
  blogPosts {
    title
    description
    id
    coverImage {
      url
    }
    slug
  }
}
`

export default function Blog() {
  const {loading,error,data}=useQuery(GET_POSTS)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className='Blog'>
      <h1 className='blog-title'>Posts</h1>
      <hr/>
      <div className="post-wrapper">
        {data.blogPosts.map((post)=>(
          <Card key={post.id} cover={post.coverImage.url} title={post.title}
            desc={post.description} link={post.slug}/>
        ))}
      </div>
    </div>
  )
}

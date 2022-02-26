import React from 'react'
import './Blog.css'
import Card from '../Card/Card'
import { useQuery, gql } from '@apollo/client'
import Feature from '../Feature/Feature'

const GET_POSTS=gql`
query{
  blogPosts(orderBy: createdAt_DESC) {
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
      <h2 className='blog-title'>Featured</h2>
      <Feature cover={data.blogPosts[0].coverImage.url} title={data.blogPosts[0].title} desc={data.blogPosts[0].description} link={data.blogPosts[0].slug}/>
      <h2 className='blog-title'>Posts</h2>
      <hr/>
      <div className="post-wrapper">
        {data.blogPosts.filter((post,index)=>index!==0).map((post)=>(
          <Card key={post.id} cover={post.coverImage.url} title={post.title}
            desc={post.description} link={post.slug}/>
        ))}
      </div>
    </div>
  )
}

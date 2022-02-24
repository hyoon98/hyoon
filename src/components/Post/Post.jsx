import React from 'react'
import "./Post.css"
import {useParams} from 'react-router-dom'
import { gql,useQuery } from '@apollo/client'
import {RichText} from '@graphcms/rich-text-react-renderer'

function Post() {
    let {slug}=useParams();
    const GET_POST=gql`
        query{
            blogPost(where: {slug: "${slug}"}) {
            id
            coverImage{
              url
            }
            title
            text{
              raw
            }
            date
          }
        }
    `
    const {loading,error,data}=useQuery(GET_POST)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  return (
    <div className='Post'>
      <h1 className='post-title'>
        {data.blogPost.title}
      </h1>
      <h4 className='post-date'>Published {data.blogPost.date}</h4>
      <img className='post-img' src={data.blogPost.coverImage.url} alt="" />
      <div className="post-content">
        <RichText className="post-content" content={data.blogPost.text.raw}/>
      </div>
    </div>
  )
}

export default Post
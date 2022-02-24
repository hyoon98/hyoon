import React from 'react'
import "./Post.css"
import {useParams} from 'react-router-dom'
import { gql,useQuery } from '@apollo/client'

function Post() {
    let {slug}=useParams();
    const GET_POST=gql`
        query{
            blogPost(where: {slug: "${slug}"}) {
            id
            title
            text
            }
        }
    `
    const {loading,error,data}=useQuery(GET_POST)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

  return (
    <div className='Post'>{data.blogPost.title}</div>
  )
}

export default Post
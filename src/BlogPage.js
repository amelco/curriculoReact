import { React, useState, useEffect } from 'react';
import HeaderLinks from './Components/HeaderLinks';
import Blog from './Components/Blog';

const BlogPage = () => {

  const [blogData, setBlogData] = useState([]);

  const getBlogData = () => {
    fetch('blogData.json',
    {
      headers: 
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setBlogData(data)
    })
  }

  useEffect(() => {
    getBlogData()
  }, [])

   return (
    <div>
      <div><HeaderLinks /></div>
      <Blog data={blogData.blogItems} />

      
    </div>
  )
}

export default BlogPage
import React from 'react'
import blog1 from '../img/blog/1.webp'
import blog2 from '../img/blog/2.webp'
import blog3 from '../img/blog/3.webp'
import blog4 from '../img/blog/4.webp'
import blog5 from '../img/blog/5.webp'
import { Wrapperblog } from '../style'
const Blog = () => {
  return (
    <div>
      <Wrapperblog className='section__padding'>
        <img src={blog1} alt="" />
        <img src={blog2} alt="" />
        <img src={blog3} alt="" />
        <img src={blog4} alt="" />
        <img src={blog5} alt="" />
      </Wrapperblog>
    </div>
  )
}

export default Blog
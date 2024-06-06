import BlogContent from '@/components/BlogContent/BlogContent'
import BlogsHero from '@/components/common/BlogsHero/BlogsHero'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <BlogsHero  heading=" Blog Details" label="details"/>
        <BlogContent/>
    </div>
  )
}

export default Blog
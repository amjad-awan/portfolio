import BlogContent from '@/components/BlogContent/BlogContent'
import BlogsHero from '@/components/common/BlogsHero/BlogsHero'
import React from 'react'

const Blog = ({params}:any) => {
  return (
    <div>
        <BlogsHero  heading=" Blog Details" label="details"/>
        <BlogContent params={params}/>
    </div>
  )
}

export default Blog
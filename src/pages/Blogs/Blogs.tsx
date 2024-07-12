import MyBlogs from '@/components/MyBlogs/MyBlogs'
import BlogsHero from '@/components/common/BlogsHero/BlogsHero'
import React from 'react'

const Blogs = () => {
  return (
    <div>
          <BlogsHero heading="Blogs " label="List"/>
          <MyBlogs button={false} />
    </div>
  )
}
export default Blogs
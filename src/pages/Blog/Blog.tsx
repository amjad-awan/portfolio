// import BlogContent from '@/components/BlogContent/BlogContent'
// import BlogsHero from '@/components/common/BlogsHero/BlogsHero'

import React from 'react'
import dynamic from 'next/dynamic'
const BlogsHero = dynamic(() => import('@/components/common/BlogsHero/BlogsHero'), {
  ssr:false,
})
const BlogContent = dynamic(() => import('@/components/BlogContent/BlogContent'), {
  ssr:false,
})
const Blog = ({params}:any) => {
  return (
    <div>
        <BlogsHero  heading=" Blog Details" label="details"/>
        <BlogContent params={params}/>
    </div>
  )
}

export default Blog
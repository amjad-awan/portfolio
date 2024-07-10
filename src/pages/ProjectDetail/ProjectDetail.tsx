// import Project from '@/components/Project/Project'
// import BlogsHero from '@/components/common/BlogsHero/BlogsHero'
import dynamic from 'next/dynamic'
import React from 'react'
const Project = dynamic(() => import('@/components/Project/Project'), {
  ssr:false,
})
const BlogsHero = dynamic(() => import('@/components/common/BlogsHero/BlogsHero'), {
  ssr:false,
})
const ProjectDetail = ({params}:any) => {
  return (
    <>
              <BlogsHero  heading=" Project Details" label="details"/>
              <Project params={params} />

    </>
  )
}

export default ProjectDetail

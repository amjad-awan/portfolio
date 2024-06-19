import BlogContent from '@/components/BlogContent/BlogContent'
import Project from '@/components/Project/Project'
import BlogsHero from '@/components/common/BlogsHero/BlogsHero'
import React from 'react'

const ProjectDetail = ({params}:any) => {
  return (
    <>
              <BlogsHero  heading=" Project Details" label="details"/>
              <Project params={params} />

    </>
  )
}

export default ProjectDetail

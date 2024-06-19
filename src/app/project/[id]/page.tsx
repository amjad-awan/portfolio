import ProjectDetail from '@/pages/ProjectDetail/ProjectDetail'
import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
     <ProjectDetail params={params} />
    </>
  )
}


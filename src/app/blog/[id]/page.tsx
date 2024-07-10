import Blog from '@/pages/Blog/Blog'
import React from 'react'

const index = ({ params }: { params: { id: string | undefined } }) => {
  return (
    <Blog params={params}/>
  )
}

export default index
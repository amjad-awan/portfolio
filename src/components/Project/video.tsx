import React from 'react'


import styles from "./style.module.scss"
import { FaArrowRight } from 'react-icons/fa6'

const Video = ({videoId,link}:any) => {

  return (
    <div>
    <div className="w-[100%] p-[20px] bg-[var(--bg-color)] mt-4 lg:mt-0 h-[350px]">
      <video
        src={`http://localhost:8080/api/v1/video/get-video/${videoId}`}
        className="w-[100%] object-cover h-[100%]"
        controls
      >
        {/* <source src={`http://localhost:3000/${video.filePath}`} type="video/mp4" /> */}
      </video>
    </div>
    <a
      href={link}
      target="_blank"
      className={` ${styles["project-link"]} mt-[20px] text-[30px] flex justify-center p-[10px] text-center border-[2px] border-[var(--color-primary)] w-[100%] cursor-pointer text-[var(--color-primary)]`}
    >
      <FaArrowRight />
    </a>
  </div>
  )
}

export default Video

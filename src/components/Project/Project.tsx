"use client";

import React, { useEffect, useState } from "react";
import SectionsHead from "../SectionsHead/SectionsHead";
import img from "../../../public/assets/images/blog1.jpg";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";
import { useRouter } from "next/navigation";
import { getProject } from "@/services/projects";
import Loader from "../common/Loader/Loader";
import { convertToPic } from "@/helpers/picture";
interface ProjectType {
  id: string;
  title: string;
  description: string;
  photoId: string;
  videoId: string;
  type: string;
  techStack: string[];
}
const Project = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [project, setProject] = useState<ProjectType | null>(null);
const [isLoading, setIsLoading]= useState(true)
  const addLineBreaks = (text: any, wordsPerLine: any) => {
    const words = text?.split(" ");
    let result = [];
    for (let i = 0; i < words?.length; i += wordsPerLine) {
      result.push(words?.slice(i, i + wordsPerLine)?.join(" "));
    }
    return result;
  };

  const getSingleProject = async () => {
    try {
      const res = await getProject(id);
      if (res && res.data) {
        setProject(res.data);
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)

    }
  };

  useEffect(() => {
    getSingleProject();
  }, [id]);


  const paragraphs = addLineBreaks(project?.description, 55);

  if(isLoading) return <div className="mt-[80px]"><Loader/></div> 
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* <div className="max-w-[1080px] pb-[30px] mb-[20px]">
        <SectionsHead
          lablePosition="left"
          lableText="MY RECENT PORTFOLIO"
          hPosition="left"
          h="Elevate your brand to new heights with our portfolio expertise"
        />
      </div> */}
      <div className="px-[20px]  lg:px-[0px] gap-[15px] mt-[120px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="p-[0px] ">
          <div className="w-[100%] h-[350px]">
            <img
              src={convertToPic(project?.photoId)}
              className=" object-cover w-[100%] h-[100%] "
            />
          </div>
          <div className="flex items-center gap-[30px] mt-[40px]">
            {/* <h3 className="text-[16px] font-[600] font-primary text-[var(--color-white)]">
              Type:
            </h3> */}
            <span className="capitalize text-[20px] text-[var(--color-black)] font-[600] leading-[1.7] bg-[var(--color-primary)] px-[20px] py-[5px] inline-block">
              {/* web application */}
              {project?.type}
            </span>
          </div>
          <AnimatedItem
            el="h2"
            cls="text-[40px] mt-[40px] font-primary font-[500] leading-[1.2] text-[var(--color-white)] transition-all translate-y-[20px] duration-500 opacity-0"
          >
            {project?.title}
            {/* E-Commerce web app */}
          </AnimatedItem>
          <div className="bg-[var(--color-primary)]  relative mt-[60px] h-[1px] w-[100%]">
            <span className="bg-[var(--color-primary)] text-[var(--color-black)] uppercase text-[12px] px-[15px] absolute  ">
              description
            </span>
          </div>

        

          <div>
            <p className="text-[var(--body-color)] text-justify font-primary font-[400] text-[16px] mt-[32px]">
              {paragraphs?.map((paragraph, index) => (
                <span key={index}>
                  {paragraph} <br />
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="bg-[var(--color-primary)]  relative mt-[30px] h-[1px] w-[100%]">
            <span className="bg-[var(--color-primary)] text-[var(--color-black)] uppercase text-[12px] px-[15px] absolute  ">
              Tech stack used
            </span>
          </div>

          <ul className="mt-[40px] list-disc pl-[18px] ">
            {project?.techStack
              ? project?.techStack?.map((tech, index) => (
                  <li
                    key={index}
                    className="text-[var(--body-color)] mb-[8px] uppercase text-[12px]"
                  >
                    {tech}
                  </li>
                ))
              : ["Reactjs", "NodeJs", "Redux", "MongoDB"].map((tech, index) => (
                  <li
                    key={index}
                    className="text-[var(--body-color)] mb-[8px] uppercase text-[12px]"
                  >
                    {tech}
                  </li>
                ))}{" "}
            {/* <span className="text-[var(--body-color)] uppercase text-[12px]"> Reactjs </span> */}
          </ul>
        </div>
        <div className=" ">
          <div className="w-[100%] p-[20px] bg-[var(--bg-color)] h-[350px]">
            <video
              src={`http://localhost:8080/api/v1/video/get-video/${project?.videoId}`}
              className="w-[100%] object-cover h-[100%]"
              controls
            >
              {/* <source src={`http://localhost:3000/${video.filePath}`} type="video/mp4" /> */}
            </video>
          </div>
        </div>
      </div>

      <div className="bg-[#e3e3e329] mt-[45px] h-[1px] w-[100%]"></div>
    </div>
  );
};

export default Project;

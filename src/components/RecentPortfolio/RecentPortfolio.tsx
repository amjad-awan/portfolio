"use client"

import React, { useEffect, useState } from "react";
import SectionsHead from "../SectionsHead/SectionsHead";
import styles from "./styles.module.scss";
import img from "../../../public/assets/images/discount-shopping-season-with-sale.jpg";
import img2 from "../../../public/assets/images/dating-app-interface-design_23-2148525704.jpg";
import img3 from "../../../public/assets/images/blog.jpg";
import img4 from "../../../public/assets/images/e-com2.jpg";
import PortfolioCard from "./PortfolioCard";
import { getProjects } from "@/services/projects";
import Loader from "../common/Loader/Loader";
import Link from "next/link";

interface PortfolioItem {
  src: { src: string };
  title: string;
  description: string;
  span: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    src: img,
    title: "E-Commerce",
    description: "Web Application",
    span: "col-span-1 lg:col-span-3",
  },
  {
    src: img2,
    title: "Marriage Bureau",
    description: "Web Application",
    span: "col-span-1",
  },
  {
    src: img3,
    title: "Blog",
    description: "Web Application",
    span: "col-span-1 lg:col-span-2",
  },
  {
    src: img4,
    title: "E-commerce",
    description: "Web Application",
    span: "col-span-1 lg:col-span-2",
  },

  {
    src: img,
    title: "E-Commerce",
    description: "Web Application",
    span: "col-span-1" ,
  },
  {
    src: img2,
    title: "Marriage Bureau",
    description: "Web Application",
    span: "col-span-1 lg:col-span-3"
  },
];

const RecentPortfolio: React.FC = () => {
const [ portfolio, setPortfolio]= useState([])
const [isLoading, setIsLoading]= useState(true)

const getPortfolio=async ()=>{
  try {
   const res= await getProjects(6) 
   if(res && res.data){
    setPortfolio(res.data)
   }
  } catch (error) {
    
  }finally{
    setIsLoading(false)
  }
}

useEffect(()=>{
  getPortfolio()
},[])

  return <div id="projects" className="max-w-[1200px] mx-auto mt-[120px] mb-[100px] px-[20px] lg:px-[0px]">
    <div className="max-w-[1080px] pb-[30px] mb-[20px]">
      <SectionsHead
        lablePosition="left"
        lableText="MY RECENT PORTFOLIO"
        hPosition="left"
        h="Elevate your brand to new heights with our portfolio expertise"
      />
    </div>

    {isLoading && <div className="my-[80px]"><Loader/></div> }
    <div className="lg:px-[0px] gap-[15px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {portfolio?.map((item:any, idx:any) => (
        <PortfolioCard key={idx} {...item} cardHeight="550" />
      ))}
    </div>
    <Link href="/projects" >
    <button
          type="button"
          className=" mt-[30px]  md:ml-auto Button w-[200px] transition-all duration-300 hover:bg-[--black3] hover:text-[var(--color-white)] text-[14px] inline-flex  text-[var(--color-black)] px-[20px] font-[600] py-[15px]  bg-[var(--color-primary)]"
        >
          More Projects +
        </button>
        </Link>

  </div>
}

export default RecentPortfolio;

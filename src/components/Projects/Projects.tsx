import React from "react";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";
import SectionsHead from "../SectionsHead/SectionsHead";
import Link from "next/link";

import img from "../../../public/assets/images/blog1.jpg";
import { FaCircleUser } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import styles from "./style.module.scss"
import imgp from "../../../public/assets/images/discount-shopping-season-with-sale.jpg";
import img2 from "../../../public/assets/images/dating-app-interface-design_23-2148525704.jpg";
import img3 from "../../../public/assets/images/blog.jpg";
import img4 from "../../../public/assets/images/e-com2.jpg";
import Card from "./Card";
interface PortfolioItem {
    src: { src: string };
    title: string;
    description: string;
  }
const portfolioItems: PortfolioItem[] = [
    {
      src: imgp,
      title: "E-Commerce",
      description: "Web Application",
      
    },
    {
      src: img2,
      title: "Marriage Bureau",
      description: "Web Application",
     
    },
    {
      src: img3,
      title: "Blog",
      description: "Web Application",
    },
    {
      src: img4,
      title: "E-commerce",
      description: "Web Application",
     
    },
  
 
  ];
const Projects = () => {

  return (
    <div className="max-w-[1200px] mb-[100px] pt-[90px] px-[20px] lg:px-[0px] mx-auto ">
        <div className="max-w-[800px] mb-[80px] mx-auto ">
        <SectionsHead
          lablePosition="center"
          lableText="PROJECT SHOWCASE"
          hPosition="center"
          h="Behold My Premier Portfolio Projects"
        />
        </div>
  
        <div className="lg:px-[0px] gap-[15px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item, idx) => (
        <Card key={idx} {...item} cardHeight="400" />
      ))}
    </div>
    </div>
  );
};

export default Projects;

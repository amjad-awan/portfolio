"use client";

import React, { useState, useEffect } from "react";
import SectionsHead from "../SectionsHead/SectionsHead";
import imgp from "../../../public/assets/images/discount-shopping-season-with-sale.jpg";
import img2 from "../../../public/assets/images/dating-app-interface-design_23-2148525704.jpg";
import img3 from "../../../public/assets/images/blog.jpg";
import img4 from "../../../public/assets/images/e-com2.jpg";
import Card from "./Card";
import { getProjects } from "@/services/projects";
import Loader from "../common/Loader/Loader";
interface PortfolioItem {
  src: { src: string };
  title: string;
  description: string;
}

const Projects = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPortfolio = async () => {
    try {
      const res = await getProjects(20);
      if (res && res.data) {
        setPortfolio(res.data);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

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
      {isLoading && (
        <div className="my-[80px]">
          <Loader />
        </div>
      )}
      <div className="lg:px-[0px] gap-[15px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {portfolio?.map((item: any, idx: any) => {
          const { cardSpan, ...other } = item;
          return <Card key={idx} {...other} cardHeight="400px" />;
        })}
      </div>
    </div>
  );
};

export default Projects;

"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionsHead from "../SectionsHead/SectionsHead";
import CvButton from "../CvButton/CvButton";
import img from "../../../public/assets/images/about-me.png";
import styles from "./style.module.scss";
import { isInViewPort } from "@/helpers/isInViewPort";
import { FaCodiepie } from "react-icons/fa";
import { RiPieChart2Fill } from "react-icons/ri";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";
const AboutMe = () => {
  const cardRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const unobserve = isInViewPort({
      cardRef,
      index: 0,
      styles: styles.animateFadeSlide,
    });

    return () => {
      if (typeof unobserve === "function") unobserve();
    };
  }, [cardRef]);
  return (
    <div id="about" className="max-w-[1200px] mb-[100px] px-[20px] lg:px-[0px] gap-[50px] mx-auto grid  grid-cols-1 md:grid-cols-2 ">
      <div className="flex flex-col ">
        <SectionsHead
          lablePosition="left"
          lableText="ABOUT ME"
          hPosition="left"
          h="Transforming visions into exceptional portfolios"
        />
        <div className=" flex flex-col md:flex-row gap-[30px] mt-[70px]">
          <div className="w-[200px] md:mt-[5px] h-[2px] bg-[var(--body-color)] "></div>
          <div className="">
            <p className="text-[16px] text-left m-0  pb-[80px] font-[400] leading-[28px] text-[var(--body-color)]">
            As a creative coder and skilled full-stack web developer, I specialize in seamlessly integrating innovative design with cutting-edge technology. With expertise in React.js, Next.js, and Node.js, I have crafted robust, scalable applications that deliver exceptional and intuitive user experiences. <span className="bg-[var(--color-primary)] text-[var(--color-black)]">My journey includes working on diverse projects, such as an NFT app that generated over $3.5M in revenue and actively contributing to an AI responses app utilized by Toyota Japan </span>. I am passionate about bringing ideas to life through code and constantly strive to push the boundaries of what's possible in web development.            </p>
            <CvButton />
          </div>
        </div>
      </div>


      <div className="flex justify-center md:justify-end">
        <AnimatedItem
          el="div"
          cls={`${styles["__image-wrapper"]} w-[365px] h-[475px] md:mt-[5px]`}
        >
          <>
            <img
              src={img.src}
              alt="about-me"
              className="w-[100%] h-[100%] object-cover "
            />
            <div className="bg-[var(--gray2-color)] w-[90%] md:w-[67%]  py-[15px] px-[30px] inline-flex items-center mx-auto absolute gap-[10px] left-[50%] translate-x-[-50%] bottom-[-30px] ">
              <div className="bg-[var(--gray3-color)] flex justify-center items-center w-[65px] h-[65px]  rounded-full">
                <RiPieChart2Fill className=" text-[40px] font-[900] text-[var(--color-white)]" />
              </div>

              <div className="flex flex-col">
                <h4 className=" font-[500] text-[16px] font-primary text-[var(--color-white)] leading-[1.2] ">
                  Daily activity{" "}
                </h4>
                <p className="text-[16px] font-[400] leading-[1.7] text-[var(--body-color)]">
                  Explore now{" "}
                </p>
              </div>
            </div>
          </>
        </AnimatedItem>
      </div>
    </div>
  );
};

export default AboutMe;

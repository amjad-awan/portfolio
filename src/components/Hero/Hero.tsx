"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import CvButton from "../CvButton/CvButton";
import { FaPlay } from "react-icons/fa";
import img from "../../../public/assets/images/hero-banner.png";
const Hero = () => {
  const [index, setIndex] = useState<number>(0);
  const text = ["Coder", "Developer", "Designer"];
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev >= text.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      className={` ${styles["banner"]}  gap-[80px] md:gap-[20px] px-[20px] lg:px-[75px] pt-[160px] grid w-[100%] grid:sm-col-1 grid-cols-3`}
    >
      <div className="col-span-3  md:col-span-2">
        <h1 className="uppercase text-[var(--color-white)] font-[700] text-[60px] leading-[1.2] font-primary">
          <b>
            HI, I'M Amjad! <br /> CREATIVE{" "}
          </b>
          <span key={index} className={styles.blink}>
            {" "}
            {text[index]}
          </span>
        </h1>

        <p className="mb-[40px]  md:mb-[65px] mt-[25px] font-primary text-[var(--body-color)] leading-[1.7] text-[16px] font-[400]">
          As a skilled full-stack web developer, I seamlessly integrate
          innovative design with cutting-edge technology. My expertise lies in
          crafting robust, scalable applications that deliver exceptional and
          intuitive user experiences.
        </p>

        <div className=" flex-col flex md:flex-row  mg:items-center md:max-w-fit gap-[30px] ">
          <CvButton />

         <div className=" cursor-pointer flex md:justify-center items-center  gap-[20px] ">
            <div className=" cursor-pointer flex justify-center items-center bg-[var(--color-primary)] w-[40px] h-[40px] rounded-full ">
              <FaPlay />
            </div>

            <p className="text-[var(--color-white)] font-[400] text-[1rem]">
              Watch The Video
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center col-span-3 md:col-span-1 ">
        <div className={`${styles["dev-img"]}`}>
        <img src={img.src} alt="Amjad"  />

        </div>
      </div>
    </div>
  );
};

export default Hero;

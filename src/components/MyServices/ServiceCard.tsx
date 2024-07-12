"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";

interface ServiceType {
  svg: ReactNode;
  title: string;
  description: string;
  index: number;
}
const ServiceCard = ({ svg, index, title, description }: ServiceType) => {
  return (
    <AnimatedItem
      el="div"
      index={index}
      cls={` relative transition-all opacity-0 duration-1000 translate-y-[20px] border-[2px] border-[var(--border-color)]  flex flex-col items-center justify-center`}
    >
   
        {svg}
        <h3 className="text-[20px] text-center mt-[20px] mb-[12px] text-[var(--color-white)] font-[500]  uppercase">
          {title}
        </h3>
        <p className="text-[16px] text-center mt-[22px] px-[44px] pb-[44px] font-[500] leading-[28px] text-[var(--body-color)]">
          {description}
        </p>
     
    </AnimatedItem>
  );
};

export default ServiceCard;

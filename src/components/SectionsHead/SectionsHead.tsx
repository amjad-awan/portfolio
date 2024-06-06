"use client";
import React, { useState, useEffect, useRef } from "react";

import styles from "./style.module.scss";
interface SectionsHeadTypes {
  lablePosition: string;
  lableText: string;
  hPosition: string;
  h: string;
}

const SectionsHead = ({
  lablePosition,
  lableText,
  hPosition,
  h,
}: SectionsHeadTypes) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="w-[100%]" ref={ref}>
      <p
        className={`uppercase text-[20px] text-${lablePosition} font-[600] mb-[12px] font-primary text-[var(--color-primary)] ${
          isVisible ? "opacity-100 " + styles["animate-fade-in"] : "opacity-0"
        }`}
      >
        {lableText}
      </p>
      <h1
        className={`text-[var(--color-white)] font-[900] text-[45px] leading-[1.3] text-${hPosition} ${
          isVisible ? "opacity-100 " + styles["animate-fade-in"] : "opacity-0"
        }`}
      >
        {h}
      </h1>
    </div>
  );
};

export default SectionsHead;

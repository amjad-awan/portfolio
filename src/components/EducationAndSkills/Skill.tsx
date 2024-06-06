"use client";

import React, { useEffect, useRef, useState } from "react";

interface SkillProps {
  name: string;
  width: string;
  index: number;
}

const Skill: React.FC<SkillProps> = ({ name, width, index }) => {
  const skillRef = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [counter, setCounter] = useState(0);

  const targetWidth = parseInt(width, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAnimated) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter < targetWidth) {
            return prevCounter + 1;
          }
          clearInterval(interval);
          return targetWidth;
        });
      }, 10); // Adjust this value to make the counter duration longer or shorter
      return () => clearInterval(interval);
    }
  }, [isAnimated, targetWidth]);

  return (
    <div
      ref={skillRef}
      className="relative bg-[var(--black3)] flex flex-col justify-between"
    >
      <p className="text-[16px] uppercase pt-[15px] pl-[40px] mb-[10px] font-[500] text-[var(--color-white)] font-primary">
        {name}
      </p>
      <div className="relative w-full h-[6px] bg-transparent">
        <div
          className="relative bg-[var(--color-primary)] transition-all duration-1000 ease-in-out h-full"
          style={{
            width: isAnimated ? width : "0%",
            transitionDelay: `${index * 0.1}s`,
          }}
        >
          {isAnimated && (
            <span
              className="absolute -top-[37px] right-[5px] text-[var(--color-white)] text-[14px] py-1 px-2 bg-[var(--color-primary)] rounded-md"
              style={{
                transform: "translateX(50%)",
                transition: `transform 1s ease-in-out ${index * 0.1}s`,
              }}
            >
              {counter}%
              <div className="absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 bg-[var(--color-primary)] w-3 h-3 rotate-45"></div>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;

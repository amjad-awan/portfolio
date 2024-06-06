"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX+40}px`;
        cursorRef.current.style.top = `${e.clientY+30}px`;
 // Adjust the duration as needed
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`${styles["custom-cursor"]}`}
    />
  );
};

export default CustomCursor;

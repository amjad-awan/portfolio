import React from "react";

import styles from "./style.module.scss";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";

const NewsLetter = () => {
  return (
    <div className={`${styles["__news-letter"]}`}>
      <AnimatedItem
        el="h3"
        cls=" transition-all duration-500 z-[5] opacity-0 translate-y-[20px] text-[40px] font-[900] uppercase text-center text-[var(--color-white)] "
      >
        <>SUBSCRIBE MY NEWSLETTER</>
      </AnimatedItem>
      <div className=" flex mt-[30px] gap-[20px ] items-center border-[1px] bg-[var(--gray5-color)] w-[550px] max-w-[95%] z-[2] p-[10px] border-[var(--color-primary)]">
<input placeholder="Enter Your Email" className="flex-1 pl-[15px] text-[var(--color-white)] text-[16px] font-primary py-[15px] bg-transparent outline-none border-none h-[100%]" />
<button
          type="button"
          className="md:ml-auto Button w-[200px] transition-all duration-300 hover:bg-[--black3] hover:text-[var(--color-white)] text-[16px] inline-flex  text-[var(--color-black)] px-[30px] font-[600] py-[15px]  bg-[var(--color-primary)]"
        >
          Notify Now 
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
const BlogsHero = ({heading, label}:any) => {
  return (
    <div className={`${styles["__blogs-hero"]}`}>
      <div className="max-w-[1200px] px-[20px] lg:px-[0px] mx-auto flex flex-col gap-[30px] md:flex-row items-start justify-between md:items-center ">
        <h1 className="font-[900] text-[50px] font-primary text-[var(--color-white)]  ">
         
          {
            heading
          }
        </h1>
        <ul  className="flex flex-wrap gap-[50px]">
          <li className="text-[20px] transition-all duration-500 hover:text-[var(--color-primary)] font-primary  font-[600] text-[var(--color-white)]">
            <Link href="">Home</Link>
          </li>
          <li className="text-[20px] transition-all duration-500 hover:text-[var(--color-primary)] font-primary  font-[600] text-[var(--color-white)]">
            <Link href="">{label}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default BlogsHero;

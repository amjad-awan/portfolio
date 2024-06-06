import Link from "next/link";
import React from "react";

const BlogTags = ({bgColor, title,padding,mb}:any) => {
  return (
  
      <div className={`bg-[var(${bgColor})] w-[100%]  p-[${padding}px] `}>
        <h3 className={` text-[20px] capitalize  text-[var(--color-white)] font-primary  font-[600] mb-[${mb}px]`}>{title}</h3>
       <div className="flex flex-wrap gap-[10px]">
       <Link href="" className="px-[14px] rounded-[4px] font-primary py-[9px] capitalize text-[14px] font-[400] text-[var(--color-white)] bg-[#151c25] ">web design</Link>
       <Link href="" className="px-[14px] rounded-[4px] font-primary py-[9px] capitalize text-[14px] font-[400] text-[var(--color-white)] bg-[#151c25] ">APIs </Link>
       <Link href="" className="px-[14px] rounded-[4px] font-primary py-[9px] capitalize text-[14px] font-[400] text-[var(--color-white)] bg-[#151c25] ">APIs integrations</Link>
        <Link href="" className="px-[14px] rounded-[4px] font-primary py-[9px] capitalize text-[14px] font-[400] text-[var(--color-white)] bg-[#151c25] ">web development</Link>
       </div>
      </div>
  
  );
};

export default BlogTags;

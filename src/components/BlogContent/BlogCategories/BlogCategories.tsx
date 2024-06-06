import React from "react";

const BlogCategories = () => {
  return (
  
      <div className="bg-[var(--bg-color)] w-[100%]  p-[40px] ">
        <h3 className=" text-[20px]  text-[var(--color-white)] font-primary  font-[600] mb-[30px] ">Search</h3>
        <input
          type="text"
          placeholder="Search your blog"
          className=" text-[var(--color-white)] font-primary bg-[#151c25] w-[100%] py-[18px] px-[20px] outline-none  "
        />
      </div>
  
  );
};

export default BlogCategories;

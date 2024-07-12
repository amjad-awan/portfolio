import React from "react";
import SectionsHead from "../SectionsHead/SectionsHead";
import Skills from "./Skills";

const EducationAndSkills = () => {
  return (
    <div className="pt-[115px] pb-[70px] bg-[var(--bg-color)]">
      <div className="max-w-[700px] mx-auto">
        <SectionsHead
          lablePosition="center"
          lableText="EDUCATION & SKILL"
          hPosition="center"
          h="Showcasing your talent
          amplifying your impact"
        />
      </div>
      <div className="max-w-[1200px] mb-[100px] w-[100%] px-[20px] lg:px-[0px]   mx-auto  gap-x-[20px]  grid gap-y-[50px] mt-[100px] sm:grid-cols-1 md:grid-cols-2 ">
        <div>
          <div className=" text-[var(--color-primary)] font-primary text-[18px] font-[400] inline-block  border-[1px] border-[var(--color-primary)] py-[10px] px-[20px] text-center ">
            2016 - 2018
          </div>
          <h3 className="text-[30px]  font-[600] text-[var(--color-white)] mt-[20px] mb-[10px] ">
          FSc-Pre Engineering (Faculty of Science)
          </h3>
          <p className="text-[16px]  font-[500] text-[var(--body-color)] font-primary mb-[10px] ">
          I completed my FSc from a reputed college in my hometown, Chishtian, with a commendable score of 75%.          </p>
        </div>
        <div>
          <div className=" text-[var(--color-primary)] font-primary text-[18px] font-[400] inline-block  border-[1px] border-[var(--color-primary)] py-[10px] px-[20px] text-center ">
            2018 - 2022
          </div>
          <h3 className="text-[30px]  font-[600] text-[var(--color-white)] mt-[20px] mb-[10px] ">
         Bachelor in Computer-Sciences (BScs)
          </h3>
          <p className="text-[16px]  font-[500] text-[var(--body-color)] font-primary mb-[10px] ">
          I completed my Bachelor's degree in Computer Science from the Agriculture University Faisalabad.

          </p>
        </div>
    
      </div>

      <Skills/>
    </div>
  );
};

export default EducationAndSkills;

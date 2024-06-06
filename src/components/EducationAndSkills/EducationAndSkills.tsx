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
      <div className="max-w-[1200px] w-[100%] px-[20px] lg:px-[0px]   mx-auto  gap-x-[20px]  grid gap-y-[50px] mt-[100px] sm:grid-cols-1 md:grid-cols-2 ">
        <div>
          <div className=" text-[var(--color-primary)] font-primary text-[18px] font-[400] inline-block  border-[1px] border-[var(--color-primary)] py-[10px] px-[20px] text-center ">
            2014 - 2018
          </div>
          <h3 className="text-[30px]  font-[600] text-[var(--color-white)] mt-[20px] mb-[10px] ">
            Wordpress and End Developer
          </h3>
          <p className="text-[16px]  font-[500] text-[var(--body-color)] font-primary mb-[10px] ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed thisnquia consequuntur magni dolores eos qui ratione
            voluptatem
          </p>
        </div>
        <div>
          <div className=" text-[var(--color-primary)] font-primary text-[18px] font-[400] inline-block  border-[1px] border-[var(--color-primary)] py-[10px] px-[20px] text-center ">
            2014 - 2018
          </div>
          <h3 className="text-[30px]  font-[600] text-[var(--color-white)] mt-[20px] mb-[10px] ">
            Wordpress and End Developer
          </h3>
          <p className="text-[16px]  font-[500] text-[var(--body-color)] font-primary mb-[10px] ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed thisnquia consequuntur magni dolores eos qui ratione
            voluptatem
          </p>
        </div>
        <div>
          <div className=" text-[var(--color-primary)] font-primary text-[18px] font-[400] inline-block  border-[1px] border-[var(--color-primary)] py-[10px] px-[20px] text-center ">
            2014 - 2018
          </div>
          <h3 className="text-[30px]  font-[600] text-[var(--color-white)] mt-[20px] mb-[10px] ">
            Wordpress and End Developer
          </h3>
          <p className="text-[16px]  font-[500] text-[var(--body-color)] font-primary mb-[10px] ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed thisnquia consequuntur magni dolores eos qui ratione
            voluptatem
          </p>
        </div>
        <div>
          <div className=" text-[var(--color-primary)] font-primary text-[18px] font-[400] inline-block  border-[1px] border-[var(--color-primary)] py-[10px] px-[20px] text-center ">
            2014 - 2018
          </div>
          <h3 className="text-[30px]  font-[600] text-[var(--color-white)] mt-[20px] mb-[10px] ">
            Wordpress and End Developer
          </h3>
          <p className="text-[16px]  font-[500] text-[var(--body-color)] font-primary mb-[10px] ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed thisnquia consequuntur magni dolores eos qui ratione
            voluptatem
          </p>
        </div>
      </div>

      <Skills/>
    </div>
  );
};

export default EducationAndSkills;

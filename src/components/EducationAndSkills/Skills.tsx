"use client";

import React from "react";
import Skill from "./Skill";

const skillData = [
  { name: 'HTML', width: '100%' },
  { name: 'CSS', width: '100%' },
  { name: 'JavaScript', width: '95%' },

  { name: 'ReactJS', width: '95%' },
  { name: 'NextJS', width: '95%' },
  { name: 'NodeJS', width: '90%' },
  { name: 'ExpressJs', width: '95%' },
  { name: 'NestJS', width: '90%' },
  { name: 'Mongodb', width: '98%' },
  { name: 'PostgreSQL', width: '98%' },
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-[1200px] w-[100%] px-[20px] lg:px-[0px] mx-auto gap-x-[25px] grid gap-y-[50px] mt-[50px] sm:grid-cols-1 md:grid-cols-2">
      {skillData.map((skill, index) => (
        <Skill key={index} name={skill.name} width={skill.width} index={index} />
      ))}
    </div>
  );
};

export default Skills;

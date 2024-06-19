import AboutMe from "@/components/AboutMe/AboutMe";
import EducationAndSkills from "@/components/EducationAndSkills/EducationAndSkills";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Hero from "@/components/Hero/Hero";
import MyServices from "@/components/MyServices/MyServices";
import RecentPortfolio from "@/components/RecentPortfolio/RecentPortfolio";
import dynamic from "next/dynamic";
import Marquee from "@/components/Marquee/Marquee";
import MyBlogs from "@/components/MyBlogs/MyBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { getProjects } from "@/services/projects";
const Carousel = dynamic(() => import("@/components/Carousel/Carousel"), {
  ssr: false,
});


export default function  Home() {

//   let projects=[]
//   try {
//     const res = await getProjects(2);
//     console.log("res",res)
//     projects=res||[]
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//   }

// console.log("projects",projects)

  return (
    <main className=" min-h-screen ">
      <Hero />
      <MyServices />
      <AboutMe />
      <GetInTouch />
      <EducationAndSkills />
      <RecentPortfolio  />
      <Carousel />
      <Marquee />
      <MyBlogs button={true} />
   
    </main>
  );
}

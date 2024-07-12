import AboutMe from "@/components/AboutMe/AboutMe";
import EducationAndSkills from "@/components/EducationAndSkills/EducationAndSkills";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Hero from "@/components/Hero/Hero";
import MyServices from "@/components/MyServices/MyServices";
import RecentPortfolio from "@/components/RecentPortfolio/RecentPortfolio";
import dynamic from "next/dynamic";
import Marquee from "@/components/Marquee/Marquee";
import MyBlogs from "@/components/MyBlogs/MyBlogs";
const Carousel = dynamic(() => import("@/components/Carousel/Carousel"), {
  ssr: false,
});


export default function  Home() {



  return (
    <main className=" min-h-screen ">
      <Hero />
      <MyServices />
      <AboutMe />
      <GetInTouch />
      <EducationAndSkills />
      <RecentPortfolio  />
      <MyBlogs button={true} />
      <Carousel />
      <Marquee />
    </main>
  );
}

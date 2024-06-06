import React from "react";
import SectionsHead from "../SectionsHead/SectionsHead";
import img from "../../../public/assets/images/blog1.jpg";
import AnimatedItem from "../common/AnimatedItem/AnimatedItem";
const Project = () => {
  const addLineBreaks = (text: any, wordsPerLine: any) => {
    const words = text.split(" ");
    let result = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      result.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return result;
  };

  const paragraphs = addLineBreaks(
    `Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
    posuere viverra Aliquam eros justo, posuere lobortis, viverra laoreet
    augue mattis fermentum ullamcorper viverra laoreets Aliquam eros
    justo, posuere loborti viverra laoreet matti ullamcorper posuere
    viverra .Aliquam eros justo posuere lobortis non designe Aliquam eros
    justo,posuere loborti viverra laoreet matti ullamcorper posuere
    viverra Aliquam eros justo, posuere loborti viverra laoreet matti
    ullamcorper posuere viverra Aliquam eros justo, posuere lobortis,
    viverra laoreet augue mattis fermentum ullamcorper viverra laoreets
    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
    posuere viverra .Aliquam eros justo posuere lobortis non designe
    Aliquam eros justo,posuere loborti viverra laoreet matti ullamcorper
    posuere viverra Aliquam eros justo, posuere loborti viverra laoreet
    matti ullamcorper posuere viverra Aliquam eros justo, posuere
    lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra
    laoreets Aliquam eros justo, posuere loborti viverra laoreet matti
    ullamcorper posuere viverra .`,
    55
  );
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* <div className="max-w-[1080px] pb-[30px] mb-[20px]">
        <SectionsHead
          lablePosition="left"
          lableText="MY RECENT PORTFOLIO"
          hPosition="left"
          h="Elevate your brand to new heights with our portfolio expertise"
        />
      </div> */}
      <div className="px-[20px]  lg:px-[0px] gap-[15px] mt-[120px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="p-[0px] ">
          <div className="w-[100%] h-[350px]">
            <img src={img.src} className=" object-cover w-[100%] h-[100%] " />
          </div>

          <div className="flex items-center gap-[30px] mt-[40px]">
            {/* <h3 className="text-[16px] font-[600] font-primary text-[var(--color-white)]">
              Type:
            </h3> */}
            <span className="capitalize text-[20px] text-[var(--color-black)] font-[600] leading-[1.7] bg-[var(--color-primary)] px-[20px] py-[5px] inline-block">
              web application
            </span>
          </div>
          <div className="bg-[var(--color-primary)]  relative mt-[60px] h-[1px] w-[100%]">

            <span className="bg-[var(--color-primary)] text-[var(--color-black)] uppercase text-[12px] px-[15px] absolute  ">
              description
            </span>
          </div>


          <AnimatedItem
            el="h2"
            cls="text-[40px] mt-[40px] font-primary font-[500] leading-[1.2] text-[var(--color-white)] transition-all translate-y-[20px] duration-500 opacity-0"
          >
            E-Commerce web app
          </AnimatedItem>

          <div>
            <p className="text-[var(--body-color)] text-justify font-primary font-[400] text-[16px] mt-[32px]">
              {paragraphs.map((paragraph, index) => (
                <span key={index}>
                  {paragraph} <br />
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="bg-[var(--color-primary)]  relative mt-[30px] h-[1px] w-[100%]">

<span className="bg-[var(--color-primary)] text-[var(--color-black)] uppercase text-[12px] px-[15px] absolute  ">
  Tech stack used
</span>
</div>

<ul className="mt-[40px] list-disc pl-[18px] ">
  <li className="text-[var(--body-color)] mb-[8px] uppercase text-[12px]"> Reactjs</li>
  <li className="text-[var(--body-color)] mb-[8px] uppercase text-[12px]"> NodeJs</li>
  <li className="text-[var(--body-color)] mb-[8px] uppercase text-[12px]">Redux</li>
  <li className="text-[var(--body-color)] mb-[8px] uppercase text-[12px]"> MongoDB</li>

  {/* <span className="text-[var(--body-color)] uppercase text-[12px]"> Reactjs </span> */}
 
</ul>



        </div>
        <div className=" ">
          <div className="w-[100%] p-[20px] bg-[var(--bg-color)] h-[350px]">
            <video
              src={"/assets/videos/file_example_MP4_480_1_5MG.mp4"}
              className="w-[100%] object-cover h-[100%]"
              controls
            ></video>
          </div>
        </div>
      </div>

      <div className="bg-[#e3e3e329] mt-[45px] h-[1px] w-[100%]"></div>

    </div>
  );
};

export default Project;

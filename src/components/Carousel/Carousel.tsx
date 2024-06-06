"use client";
import React from "react";
import dynamic from "next/dynamic";
import Rating from "./Rating";
import styles from "./style.module.scss";
import { reviews } from "./data";
import SectionsHead from "../SectionsHead/SectionsHead";

// Dynamically import react-slick to avoid SSR issues
const Slider: any = dynamic(() => import("react-slick"), {
  ssr: false,
});

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    space: 10,
    speed: 500,
    slidesToShow: 2,
    centerPadding: "30px",
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className=" mb-[120px] max-w-[1200px] mx-auto">
      <SectionsHead
        lablePosition="center"
        lableText="CLIENTS REVIEW"
        hPosition="center"
        h="My testomonial"
      />

      <div className="slider-container mt-[20px] ">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative p-[20px] pr-[90px] w-[100%] border-[1px] border-[var(--gray4-color)]"
            >
              <div className="h-[100px] z-[9999] w-[100px] rounded-full overflow-hidden absolute top-[-50px] right-[30px]">
                <img
                  src={review.img}
                  className="object-contain h-[100%] w-[100%]"
                />
              </div>
              <Rating rating={review.rating} />
              <h3 className="text-[22px] mt-[17px] mb-[5px] font-primary text-[var(--color-white)] font-[500]">
                {review.name}
              </h3>
              <h5 className="text-[14px] font-primary uppercase text-[var(--body-color)] font-[400]">
                {review.role}
              </h5>
              <p
                className={`${styles["__desc"]} text-[16px] leading-[1.7] mt-[15px] font-primary text-[var(--body-color)] font-[400]`}
              >
                {review.text}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

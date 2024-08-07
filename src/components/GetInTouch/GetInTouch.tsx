"use client"

import React, { useEffect, useState } from "react";
import Form from "./Form";

const GetInTouch = () => {

  const [projectCount, setProjectCount] = useState<number>(0);
  const [clientViewCount, setClientViewCount] = useState(0);

  useEffect(() => {
      const projectTarget = .5;
      const clientViewTarget = 1;
      const incrementDuration = 1000; // duration for the increment

      const incrementCount = (setCountFunction: React.Dispatch<React.SetStateAction<number>>, target: number) => {
          let count = 0;
          const increment = Math.ceil(target / 20); // adjust the divisor to change speed
          const interval = setInterval(() => {
              count += increment;
              if (count >= target) {
                  setCountFunction(target);
                  clearInterval(interval);
              } else {
                  setCountFunction(count);
              }
          }, (incrementDuration / target) * increment);
      };

      incrementCount(setProjectCount, projectTarget);
      incrementCount(setClientViewCount, clientViewTarget);
  }, []);

  return (
    <div id="contact" className="max-w-[1200px] mb-[100px] px-[20px] lg:px-[0px] gap-[20px] mx-auto grid  grid-cols-1 md:grid-cols-2 ">
      <div>
        <h2 className="font-[600] text-[var(--color-white)] font-primary text-[100px] md:text-[128px] leading-[60px] ">
          Design{" "}
          <span className="font-[600] font-primary text-[40px] md:text-[55px] leading-none ">
            {" "}
            and Innovation
          </span>{" "}
        </h2>
        <p className="font-[400] font-primary mt-[40px] mb-[20px] text-[16px] text-[var(--body-color)] ">
        In today's fast-paced digital world, design and innovation are more crucial than ever. The fusion of creative design and cutting-edge technology not only drives progress but also shapes our everyday experiences. Good design is not just about aesthetics; it's about creating functional, intuitive, and user-friendly interfaces that enhance user experience and engagement.
        <br></br> Innovation, on the other hand, pushes boundaries, challenges the status quo, and opens up new possibilities. Together, design and innovation transform ideas into reality, fostering growth and driving success in the digital era.

        </p>

        <div className="grid grid-cols-1 mt-[50px] gap-[20px] md:grid-cols-2 ">
          <div className=" flex flex-col justify-center items-center gap-[20px] bg-[var(--bg-color)] p-[40px]">
            <svg
              width="75"
              height="60"
              viewBox="0 0 75 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="null"
              className="svg img-fluid w-100 replaced-svg"
            >
              <g clipPath="url(#clip0_2773_413)">
                <path
                  d="M29.6018 60.0002C29.3531 60.0002 29.1043 59.8743 28.9178 59.7484L0.248601 30.6613C-0.124534 30.2835 -0.124534 29.7169 0.248601 29.3392L28.9799 0.252066C29.3531 -0.125689 29.9128 -0.125689 30.2859 0.252066L58.9551 29.2762C59.3282 29.654 59.3282 30.2206 58.9551 30.5983L30.2859 59.6854C30.0993 59.8743 29.8506 60.0002 29.6018 60.0002ZM2.23865 29.9687L29.6018 57.6707L56.965 29.9687L29.6018 2.26676L2.23865 29.9687Z"
                  fill="#55E6A5"
                ></path>
                <path
                  d="M51.8646 53.4512C51.6159 53.4512 51.3671 53.3252 51.1806 53.1993L43.7179 45.6442C43.3447 45.2665 43.3447 44.6998 43.7179 44.3221C44.091 43.9443 44.6507 43.9443 45.0238 44.3221L51.8025 51.1846L72.7602 29.9674L51.8646 8.81317L30.285 30.66C29.9119 31.0377 29.3522 31.0377 28.9791 30.66C28.6059 30.2822 28.6059 29.7156 28.9791 29.3378L51.1806 6.86144C51.5537 6.48369 52.1134 6.48369 52.4865 6.86144L74.688 29.3378C75.0612 29.7156 75.0612 30.2822 74.688 30.66L52.4865 53.1364C52.3 53.3252 52.1134 53.4512 51.8646 53.4512Z"
                  fill="#55E6A5"
                ></path>
                <path
                  d="M26.1812 35.9499C24.8753 35.9499 23.7559 34.8796 23.7559 33.4945C23.7559 32.1723 24.8131 31.0391 26.1812 31.0391C27.4872 31.0391 28.6066 32.1094 28.6066 33.4945C28.6066 34.8166 27.4872 35.9499 26.1812 35.9499ZM26.1812 32.9278C25.8703 32.9278 25.6215 33.1797 25.6215 33.4945C25.6215 33.8093 25.8703 34.0611 26.1812 34.0611C26.4922 34.0611 26.7409 33.8093 26.7409 33.4945C26.7409 33.1797 26.4922 32.9278 26.1812 32.9278Z"
                  fill="#55E6A5"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2773_413">
                  <rect width="75" height="60" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <h3 className="font-[700] text-[40px] font-primary text-[var(--color-white)]">
            {projectCount}k+
            </h3>
            <p className="text-[18px] font-[400] text-[var(--color-white)] leading-[1.7]  ">
              Complete project
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px] bg-[var(--bg-color)] p-[40px]">
            <svg
              width="75"
              height="60"
              viewBox="0 0 75 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="null"
              className="img-fluid w-100 svg replaced-svg"
            >
              <g clipPath="url(#clip0_2773_398)">
                <path
                  d="M70.8102 60.0031H4.19006C3.6314 60.0031 3.14258 59.3089 3.14258 58.5155C3.14258 57.7221 3.6314 57.0279 4.19006 57.0279H69.8325L72.6956 4.46591L51.6761 21.8213C51.1873 22.218 50.5588 22.0196 50.2794 21.3254C50.0001 20.6312 50.1398 19.7386 50.6286 19.3419L73.394 0.59814C73.7431 0.30062 74.1621 0.30062 74.5113 0.59814C74.8605 0.895661 75.0001 1.39153 75.0001 1.98657L71.8577 58.7138C71.7878 59.4081 71.3688 60.0031 70.8102 60.0031Z"
                  fill="#55E6A5"
                ></path>
                <path
                  d="M70.8101 60.0085H4.18994C3.63128 60.0085 3.21229 59.4135 3.14246 58.6201L0 1.89282C0 1.29778 0.139665 0.801911 0.488827 0.50439C0.837989 0.20687 1.25698 0.20687 1.60615 0.50439L45.1117 36.306C45.6006 36.7027 45.8101 37.5953 45.4609 38.2895C45.1816 38.9837 44.5531 39.2812 44.0642 38.7854L2.23464 4.47133L5.09777 57.0333H70.7402C71.2989 57.0333 71.7877 57.7275 71.7877 58.5209C71.8575 59.3143 71.3687 60.0085 70.8101 60.0085Z"
                  fill="#55E6A5"
                ></path>
                <path
                  d="M50.9078 22.0192C50.6285 22.0192 50.3492 21.9201 50.1397 21.6225L37.5 3.57296L24.7905 21.6225C24.3715 22.2176 23.743 22.2176 23.324 21.6225C22.905 21.0275 22.905 20.1349 23.324 19.5399L36.7318 0.399406C37.1508 -0.195635 37.7793 -0.195635 38.1983 0.399406L51.6061 19.4407C52.0251 20.0358 52.0251 20.9283 51.6061 21.5234C51.3966 21.8209 51.1871 22.0192 50.9078 22.0192Z"
                  fill="#55E6A5"
                ></path>
                <path
                  d="M51.1865 48.7997C49.0915 48.7997 47.3457 46.3204 47.3457 43.3452C47.3457 40.37 49.0915 37.8906 51.1865 37.8906C53.2815 37.8906 55.0273 40.37 55.0273 43.3452C55.0273 46.3204 53.2815 48.7997 51.1865 48.7997ZM51.1865 40.8658C50.2088 40.8658 49.4407 41.9567 49.4407 43.3452C49.4407 44.7336 50.2088 45.8245 51.1865 45.8245C52.1641 45.8245 52.9323 44.7336 52.9323 43.3452C52.9323 41.9567 52.1641 40.8658 51.1865 40.8658Z"
                  fill="#55E6A5"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2773_398">
                  <rect width="75" height="60" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <h3 className="font-[700] text-[40px] font-primary text-[var(--color-white)]">
            {clientViewCount}k+
            </h3>

            <p className="text-[18px] font-[400] text-[var(--color-white)] leading-[1.7]  ">
              Client review
            </p>
          </div>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default GetInTouch;

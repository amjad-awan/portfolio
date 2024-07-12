"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../../../app/globals.scss";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

import logo from "../../../../public/assets/images/logo2.svg";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import FormWrapper from "../FormWrapper/FormWrapper";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  const [showDrawer, setShowDrawer] = useState(true);

  const handleDrawerToggle = () => setShowDrawer((prev) => !prev);
  const routes = {
    home: "/",
    about: pathName === "/" ? "/#about" : "/about",
    projects: pathName === "/" ? "/#projects" : "/projects",
    services: pathName === "/" ? "/#services" : "/services",
    contact: pathName === "/" ? "/#contact" : "/contact",
    blogs: pathName === "/" ? "/#blogs" : "/blogs",
  };

  return (
    <>
      <div className="navbar fixed z-[7] top-0 right-0 left-0  max-w-[1200px] w-[100%]  mx-auto h-[80px] bg-[var(--black3)] flex justify-between items-center">
        <div className="logo w-[180px] h-[110px] ">
          <Image
            src={logo}
            alt="logo"
            className="object-contain w-[100%] h-[100%]"
          />
        </div>
        <ul className="list-none hidden md:flex gap-[30px]">
          <li className="uppercase font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave">
            <Link href={routes.home} className="px-[10px] flex">
              <div>H</div>
              <div>O</div>
              <div>M</div>
              <div>E</div>
            </Link>
          </li>
          <li className="uppercase font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave">
            <Link href={routes.about} className="px-[10px] flex">
              <div>A</div>
              <div>B</div>
              <div>O</div>
              <div>U</div>
              <div>T</div>
            </Link>
          </li>
          <li className="uppercase font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave">
            <Link href={routes.services} className="px-[10px] flex">
              <div>S</div>
              <div>E</div>
              <div>R</div>
              <div>V</div>
              <div>I</div>
              <div>C</div>
              <div>E</div>
              <div>S</div>
            </Link>
          </li>
          <li className="uppercase font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave">
            <Link href={routes.projects} className="px-[10px] flex">
              <div>P</div>
              <div>R</div>
              <div>O</div>
              <div>J</div>
              <div>E</div>
              <div>C</div>
              <div>T</div>
              <div>S</div>
            </Link>
          </li>
          <li className="uppercase font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave">
            <Link href={routes.contact} className="px-[10px] flex">
              <div>C</div>
              <div>O</div>
              <div>N</div>
              <div>T</div>
              <div>A</div>
              <div>C</div>
              <div>T</div>
            </Link>
          </li>
          <li className="uppercase font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave">
            <Link href={routes.blogs} className="px-[10px] flex">
              <div>B</div>
              <div>L</div>
              <div>O</div>
              <div>G</div>
              <div>S</div>
            </Link>
          </li>
        </ul>
        <div
          onClick={handleDrawerToggle}
          className="bg-[var(--color-primary)] cursor-pointer text-[var(--bg-color)] w-[80px] flex font-primary text-[40px] justify-center items-center h-[80px]"
        >
          <HiOutlineBars3CenterLeft />
        </div>
      </div>
      <div
        className={` ${
          showDrawer ? "-z-[1] left-[100%] " : "z-[99]  inset-0  "
        } fixed  flex`}
        onClick={handleDrawerToggle}
      >
        <div
          className={`${
            showDrawer ? "-z-[99] " : " inset-0 "
          } fixed transition-all duration-500 ease-in-out  bg-black opacity-50`}
        />

        <div
          className={` transition-all duration-500 ease-in-out ${
            showDrawer ? "right-[-100%]" : "right-[0%]"
          } z-[99] h-[100%] fixed  bg-[var(--bg-color)] w-[90%]  md:w-[400px] shadow-lg  `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-[var(--black3)] px-[10px] flex justify-between items-center h-[80px] ">
            <p className="uppercase font-primary text-[20px] font-[600] text-[var(--color-white)]">
              amjad
            </p>
            <div
              onClick={handleDrawerToggle}
              className=" cursor-pointer flex justify-center items-center bg-[var(--color-primary)] w-[30px] h-[30px] rounded-full "
            >
              <RxCross2 />
            </div>
          </div>

          <ul className="list-none px-[30px] py-[20px] md:hidden flex flex-col">
            <li className="uppercase border-b-[1px] py-[15px] border-[#f5f4f41a] font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave  ">
              <Link href={routes.home} className=" flex">
                <div>H</div>
                <div>O</div>
                <div>M</div>
                <div>E</div>
              </Link>
            </li>
            <li className="uppercase border-b-[1px] py-[15px] border-[#f5f4f41a] font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave  ">
              <Link href={routes.about} className=" flex">
                <div>A</div>
                <div>B</div>
                <div>O</div>
                <div>U</div>
                <div>T</div>
              </Link>
            </li>
            <li className="uppercase border-b-[1px] py-[15px] border-[#f5f4f41a] font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave  ">
              <Link href={routes.services} className=" flex">
                <div>S</div>
                <div>E</div>
                <div>R</div>
                <div>V</div>
                <div>I</div>
                <div>C</div>
                <div>E</div>
                <div>S</div>
              </Link>
            </li>
            <li className="uppercase border-b-[1px] py-[15px] border-[#f5f4f41a] font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave  ">
              <Link href={routes.projects} className=" flex">
                <div>P</div>
                <div>R</div>
                <div>O</div>
                <div>J</div>
                <div>E</div>
                <div>C</div>
                <div>T</div>
                <div>S</div>
              </Link>
            </li>
            <li className="uppercase border-b-[1px] py-[15px] border-[#f5f4f41a] font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave  ">
              <Link href={routes.contact} className=" flex">
                <div>C</div>
                <div>O</div>
                <div>N</div>
                <div>T</div>
                <div>A</div>
                <div>C</div>
                <div>T</div>
              </Link>
            </li>
            <li className="uppercase border-b-[1px] py-[15px] border-[#f5f4f41a] font-primary font-[600] text-[14px] text-[var(--color-white)] li-wave  ">
              <Link href={routes.blogs} className=" flex">
                <div>B</div>
                <div>L</div>
                <div>O</div>
                <div>G</div>
                <div>S</div>
              </Link>
            </li>
          </ul>
          <div className="p-5 hidden md:block pb-[100px] h-[100%] px-[30px] overflow-auto ">
            <h2 className="text-xl font-bold mt-[40px] text-[var(--color-white)] mb-4">
              ABOUT US
            </h2>
            <p className="mb-4 font-primary text-[var(--body-color)] leading-[1.7] text-[16px] font-[400]">
              Ready to take your project to the next level? Let's collaborate
              and build something amazing together! Reach out and let's get
              started on turning your vision into reality.
            </p>
            <h4 className="text-lg font-primary text-[var(--color-white)] text-[20px] uppercase mt-[50px]  mb-[20px]">
              GET IN TOUCH
            </h4>
            <FormWrapper />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

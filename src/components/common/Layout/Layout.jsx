"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CustomCursor from "../Cursor/Cursor";
import Footer from "../Footer/Footer";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { FaCircleUser } from "react-icons/fa6";
import AuthModal from "../AuthModal/AuthModal";
import { useAuth } from "@/context/authContext";

const Layout = ({ children }) => {
  const { login, user,setShowModal } = useAuth();

  console.log("user",user)

  return (
    <div className="relative">
      <CustomCursor />
      
      <NavBar />
      {children}
      <NewsLetter />
      <Footer />
      <AuthModal  />
      <div
        onClick={() => setShowModal((prev) => !prev)}
        className=" cursor-pointer bg-[var(--body-bg)] text-[var(--color-primary)] flex justify-center items-center rounded-full h-[40px] z-[9] w-[40px] fixed top-[20px] right-[100px] md:right-[10px] "
      >
        {user ? (
          user.displayName?.charAt(0)
        ) : (
          <FaCircleUser className="leading-[50px] text-[40px] text-[var(--color-primary)] " />
        )}
      </div>
    </div>
  );
};

export default Layout;

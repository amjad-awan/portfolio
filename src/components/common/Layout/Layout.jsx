import Link from "next/link";
import React from "react";
import NavBar from "../NavBar/NavBar";
import CustomCursor from "../Cursor/Cursor";
import Footer from "../Footer/Footer";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

const Layout = ({ children }) => {
  return (
    <div>
      <CustomCursor/>
      <NavBar />
      {children}
      <NewsLetter/>
     <Footer/>
    </div>
  );
};

export default Layout;

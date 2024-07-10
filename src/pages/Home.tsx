// import Hero from "@/components/Hero/Hero";
// import Layout from "@/components/common/Layout/Layout";
import dynamic from "next/dynamic";
import React from "react";
const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr:false,
})
const Layout = dynamic(() => import("@/components/common/Layout/Layout"), {
  ssr:false,
})
const Home = () => {
  return (
    <Layout>
      <div>
        <Hero />
      </div>
    </Layout>
  );
};

export default Home;

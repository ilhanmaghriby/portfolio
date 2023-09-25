import React from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import Certificate from "../components/certificate/Certificate";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Work />
      <Resume />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

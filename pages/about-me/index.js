import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Description from "./Description";

const AboutMe = () => {
  return (
    <div className="bg-cream-50 h-screen">
      <Header />
      <Description />
      <Footer />
    </div>
  );
};

export default AboutMe;

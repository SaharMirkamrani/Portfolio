import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Description from "./Description";

const AboutMe = () => {
  return (
    <div className="bg-cream-50 min-h-screen max-h-max py-24">
      <Header />
      <Description />
      <Footer />
    </div>
  );
};

export default AboutMe;

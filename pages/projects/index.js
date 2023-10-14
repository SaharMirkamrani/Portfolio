import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cards from "./Cards";

const Projects = () => {
  return (
    <div className="bg-cream-50 min-h-screen max-h-max py-24">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
};

export default Projects;

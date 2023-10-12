import React, { useState } from "react";
import pic from "../assets/Me.jpg";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  const [isHovered, setIsHovered] = useState(false);

  const paragraph = `I'm a 23-year-old software engineer with a passion for exploring new horizons and problem-solving. I thrive on challenges and am constantly seeking to expand my knowledge in the ever-evolving world of technology. My resourcefulness and commitment to research allow me to adapt to new situations and stay ahead in the field of software development. With a strong foundation in front-end development, I'm dedicated to creating innovative and user-friendly solutions that make a meaningful impact.`;

  return (
    <div className="bg-cream-50 text-teal-900 pb-20 md:py-10">
      <UpArrow />
      <div className="container mx-auto flex flex-col flex-col-reverse md:flex-row items-center justify-center space-x-4 px-8">
        <div className="md:w-1/3 text-center md:text-left">
          <p className="text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
            {paragraph} <br />
            <Link href="/about-me">
              <span className="text-green-500 hover:underline cursor-pointer">
                Learn More...
              </span>
            </Link>
          </p>
        </div>

        <div
          className="md:w-1/4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`rounded-full scale-75 overflow-hidden transform ${
              isHovered ? "rotate-6" : "rotate-0"
            }`}
            style={{ transition: "transform 0.3s ease" }}
          >
            <Image
              src={pic}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const UpArrow = () => {
  return (
    <div className="animate-bounce text-green-300 text-xl rotate-0 transform w-1/2 md:w-5/6 mx-auto mt-12 md:mt-2 md:mr-2 pb-10 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-red-800 transform rotate-180"
      >
        <path
          fill-rule="evenodd"
          d="M10 3a1 1 0 011 1v10.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z"
        />
      </svg>
      <h2
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="font-semibold bg-gradient-to-r text-transparent from-red-800 via-yellow-300 to-blue-600 bg-clip-text"
      >
        Check out my work!
      </h2>
    </div>
  );
};

export default Introduction;

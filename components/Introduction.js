import React, { useState } from "react";
import pic from "../assets/me.jpg";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  const [isHovered, setIsHovered] = useState(false);

  const paragraph = `Hey there! My name is Sahar and I'm a 23 year old software engineer with a passion for web3 space. I love problem-solving and cutting-edge technologies and I try my best to keep up with them. My resourcefulness and my researching skills allow me to adapt to new situations. With a strong foundation in front-end development, I'm dedicated to creating innovative and user-friendly solutions.`;

  return (
    <div className="pb-20 text-teal-900 bg-cream-50 md:py-10">
      <UpArrow />
      <div className="container flex flex-col-reverse items-center justify-center px-8 mx-auto space-x-4 md:flex-row">
        <div className="text-center md:w-1/3 md:text-left">
          <div
            className="text-md md:text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {paragraph} <br />
            <Link href="/about-me">
              <p className="pt-4 font-semibold text-red-500 cursor-pointer hover:underline">
                Learn More...
              </p>
            </Link>
          </div>
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
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-red-800 transform rotate-180"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v10.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z"
        />
      </svg>
      <h2
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="font-semibold text-transparent bg-gradient-to-r from-red-800 via-yellow-300 to-blue-600 bg-clip-text"
      >
        Check out my work!
      </h2>
    </div>
  );
};

export default Introduction;

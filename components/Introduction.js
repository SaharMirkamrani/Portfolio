import React, { useState } from "react";
import pic from "../assets/Me.jpg";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  const [isHovered, setIsHovered] = useState(false);

  const paragraph = `I'm a passionate front-end developer with a love for clean and efficient code. My journey in web development began with a deep curiosity and a desire to create. I enjoy transforming creative ideas into user-friendly and visually appealing websites. Let's work together to bring your digital projects to life.`;

  // Function to truncate the paragraph
  const truncateParagraph = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "..." + " ";
    } else {
      return text;
    }
  };

  const truncatedParagraph = truncateParagraph(paragraph, 250);

  return (
    <div className="bg-cream-50 text-teal-900 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-x-4 px-8">
        <div className="w-1/2 md:w-1/4 text-center md:text-left">
          <p className="text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
            {truncatedParagraph}{" "}
            <Link href="/about-me">
              <span className="text-green-500 hover:underline cursor-pointer">
                Read More...
              </span>
            </Link>
          </p>
        </div>

        <div
          className="w-1/2 md:w-1/4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`rounded-full scale-50 overflow-hidden transform ${
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

export default Introduction;

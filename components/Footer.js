import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsGithub, BsTelegram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-cream-100 py-4 fixed bottom-0 w-full z-10">
      <div className="container mx-auto flex space-x-4 items-center justify-center">
        <p
          className="pl-2 text-lg text-cream-100 lg:w-56"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Contact me:
        </p>
        <div className="flex space-x-4">
          <Link href="mailto:saharmirkamrani@gmail.com">
            <BiLogoGmail className="transition-transform transform hover:scale-110" />
          </Link>
          <Link href="https://twitter.com/traumatic_devep">
            <FaTwitter className="transition-transform transform hover:scale-110" />
          </Link>
          <Link href="https://www.linkedin.com/in/sahar-mirkamrani">
            <IoLogoLinkedin className="transition-transform transform hover:scale-110" />
          </Link>
          <Link href="https://github.com/SaharMirkamrani">
            <BsGithub className="transition-transform transform hover:scale-110" />
          </Link>
          <Link href="https://t.me/SaharMirkamrani">
            <BsTelegram className="transition-transform transform hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

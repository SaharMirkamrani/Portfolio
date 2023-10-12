import React from "react";
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsGithub, BsDiscord, BsTelegram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-cream-100 py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex space-x-4 items-center justify-center">
        <p className="pl-2 text-lg text-cream-100 lg:w-56">Contact me: </p>
        <div className="flex space-x-4">
          <Link href="mailto:saharmirkamrani@gmail.com">
            <BiLogoGmail />
          </Link>
          <Link href="https://twitter.com/traumatic_devep">
            <FaTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/sahar-mirkamrani">
            <IoLogoLinkedin />
          </Link>
          <Link href="https://discordapp.com/SaharDevep#1080">
            <BsDiscord />
          </Link>
          <Link href="https://github.com/SaharMirkamrani">
            <BsGithub />
          </Link>
          <Link href="https://t.me/yourtelegram">
            <BsTelegram />
          </Link>
          <Link href="https://wa.me/yourwhatsapp">
            <IoLogoWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

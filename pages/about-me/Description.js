import React, { useState } from "react";
import web3 from "../../assets/Web3.jpg";
import solidity from "../../assets/solidity.svg";
import me from "../../assets/pic.jpg";
import crypto from "../../assets/crypto.png";
import security from "../../assets/security.jpg";
import eth from "../../assets/ethereum.png";
import sc1 from "../../assets/Screenshot (9).png";
import sc2 from "../../assets/Screenshot (10).png";
import sc3 from "../../assets/Screenshot (11).png";
import Image from "next/image";
import Link from "next/link";

const Description = () => {
  const [isHovered, setIsHovered] = useState(false);

  const paragraph_1 = `I'm 23 years old and I'm a software engineer mainly focused on front-end development. I have explored some other territories in the computer science field as well. I am very flexible and I love to learn anything that helps me deepen my knowledge of this huge ocean of a field, I jump head first and I'm not scared of the unknown. I'm very resourceful and I research a lot.`;

  const paragraph_2 = `So, first off, I was a front-end dev, then I began to learn about this exciting new world called web3. And that was the beginning of my journey to learn about Solidity and programming apps on Ethereum. At the same time, I was researching day and night about tokenomics of the crypto projects and their innovative ideas. I got hired as an intern to work on an NFT project related to authentication, then my position changed to a fundamental analyzer/researcher. My task was to analyze crypto projects from various aspects and rate them if they are a good long-term investment or not.`;

  const paragraph_3 = `At this point I was reading different smart contract codebases, then I stumbled upon web3 security and bug bounties. At first I found about code4rena.com and I was instantly interested. I began to research about smart contract vulnerabilities. Not long after that I started participating in the audit contests. I managed to uncover a couple of High and Medium severity bugs as well as a ton of Quality Assurance and Gas Optimization reports.`;

  const paragraph_4 = `As you can see, I was a member of two teams, Red lotus and Tatakae. We worked on different codebases, from liquid staking protocols to Automated Market maker mechanisms, liquidity pools and beyond.`;

  return (
    <div className="bg-cream-50 text-teal-900 md:py-20">
      <div className="container mx-auto flex flex-col flex-col-reverse md:flex-row items-center justify-center space-x-4 px-8">
  <div className="w-3/4 md:w-1/4 text-center md:text-left">
    <p className="text-md md:text-md" style={{ fontFamily: "Poppins, sans-serif" }}>
      {paragraph_1}
    </p>
  </div>

  <div
    className="w-full md:w-1/4"
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
        src={me}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  </div>
</div>


      <div className="text-center mt-4">
        <h1 className="text-teal-800 text-2xl font-semibold my-8 md:mt-0">My Experiences</h1>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-x-4 px-8 md:space-x-0">
  <div className="w-2/3 md:w-1/4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <div className={`rounded-full scale-75 overflow-hidden transform ${isHovered ? "rotate-6" : "rotate-0"}`} style={{ transition: "transform 0.3s ease" }}>
      <Image src={web3} width={500} height={500} alt="Picture of the author" />
    </div>
  </div>
  <div className="w-3/4 md:w-1/4 text-center">
    <p className="text-md md:text-md" style={{ fontFamily: "Poppins, sans-serif" }}>
      {paragraph_2}
    </p>
    <br />
    <p className="text-lg text-green-500" style={{ fontFamily: "Poppins, sans-serif" }}>
      DM me to get the best tools for fundamental analysis for free!
    </p>
  </div>
  <div className="w-2/3 md:w-1/4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <div className={`rounded-full scale-75 overflow-hidden transform ${isHovered ? "rotate-6" : "rotate-0"}`} style={{ transition: "transform 0.3s ease" }}>
      <Image src={crypto} width={500} height={500} alt="Picture of the author" />
    </div>
  </div>
</div>


      <div className="text-center my-12">
        <h1 className="text-teal-800 text-xl font-semibold">
          Next Milestone: Web3 security!
        </h1>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-x-4 px-8 md:space-x-0">
  <div className="w-3/4 md:w-1/4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <div className={`rounded-full scale-75 overflow-hidden transform ${isHovered ? "rotate-6" : "rotate-0"}`} style={{ transition: "transform 0.3s ease" }}>
      <Image src={security} width={500} height={500} alt="Picture of the author" />
    </div>
    <div className={`rounded-full scale-75 overflow-hidden transform ${isHovered ? "rotate-6" : "rotate-0"}`} style={{ transition: "transform 0.3s ease" }}>
      <Image src={eth} width={500} height={500} alt="Picture of the author" />
    </div>
  </div>
  <div className="w-3/4 md:w-1/4 text-center">
    <p className="text-md md:text-md" style={{ fontFamily: "Poppins, sans-serif" }}>
      {paragraph_3}
    </p>
  </div>
</div>


      <div className="text-center mb-12">
        <h1 className="text-teal-800 text-xl font-semibold">Achievements</h1>
      </div>

      <div className="container mx-auto flex flex-col items-center space-y-4 px-8 lg:mb-24 pb-24">
        <Image
          src={sc1}
          width={1000}
          height={1000}
          className="rounded-full"
          alt="Picture of the author"
        />
        <Image
          src={sc2}
          width={950}
          height={950}
          className="rounded-full"
          alt="Picture of the author"
        />
        <Image
          src={sc3}
          width={900}
          height={900}
          className="rounded-full"
          alt="Picture of the author"
        />
        <p
          className="text-md w-2/3 md:w-1/3 pt-4 text-center md:text-left"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {paragraph_4}
        </p>
      </div>
    </div>
  );
};

export default Description;

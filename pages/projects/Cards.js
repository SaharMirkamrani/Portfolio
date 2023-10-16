import React from "react";
import Link from "next/link";
import YouTube from 'react-youtube';

const Cards = () => {
  const projects = [
    {
      id: 1,
      title: "ETCBAYC",
      videoURL: "wlp73ssNAo0",
      technologies: [
        "TypeScript",
        "GraphQL",
        "Tailwind",
        "Ethersjs",
        "Wagmi",
        "Apollo",
      ],
      description:
        "This is a large scale Nextjs project and it is a minting website for the well-known NFT collection, ETC Bored Ape Yacht Club. It includes merch shopping functionality as well as info about the project roadmap",
      url: "https://etcbayc.com/",
    },
    {
      id: 2,
      title: "ETCBillboard",
      videoURL: "cZWropUoLck",
      technologies: [
        "TypeScript",
        "Ethersjs",
        "Mocha & Chai",
        "Nextjs",
        "Hardhat",
      ],
      description:
        "ETCBillboard is a 100x100 and 1st Rentable NFT Project on Ethereum Classic (ETC) blockchain, where people can advertise and promote anything by showing any picture on their billboards.",
      url: "https://etcbillboard.com/",
    },
    {
      id: 3,
      title: "NFT Marketplace",
      videoURL: "GeUmFT9pFHI",
      technologies: ["Style components", "React.js"],
      description:
        "This is a complete project of an NFT marketplace with modern and minimalistic design. It contains separate pages for every NFT a bidding section and a simple pretty landing page as well as individual pages for every NFT creator.",
      url: "https://yt-react-next-ui-crypto-nft.vercel.app/",
    },
  ];

	const onPlayerReady = (event) => {
    event.target.pauseVideo();
  }

  const opts = {
    height: "250",
    width: "350",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div
      className="text-cream-100 pb-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap -m-4 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-1/3 lg:max-w-max p-4 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-lg shadow-lg overflow-hidden bg-teal-800 flex flex-col items-center pt-4 md:min-h-full">
                {/* Video */}
                <YouTube videoId={project.videoURL} opts={opts} onReady={onPlayerReady} />
                {/* Project Details */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="mb-4">
                    <p className="font-semibold">Technologies used:</p>
                    <ul className="list-disc list-inside">
                      {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <p>{project.description}</p>
                  <div className="font-bold text-red-300 my-4">
                    Link:{" "}
                    <Link href={project.url} target="_blank">
                      {" "}
                      <span className="cursor-pointer text-cream-100">
                        {project.title}{" "}
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

			<div className="flex justify-center items-center mx-2">
      <div className="bg-red-300 text-cream-100 p-4 rounded-md text-center">
        To view my other projects such as <span className="font-semibold">a real estate website</span> and more check out my <Link className="underline" href="https://github.com/SaharMirkamrani" target="_blank">GitHub</Link>! 😊 
      </div>
    </div>
    </div>
  );
};

export default Cards;

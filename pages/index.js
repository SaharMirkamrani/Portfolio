import Header from "../components/Header";
import "tailwindcss/tailwind.css";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";
import YouTube from "react-youtube";

const onPlayerReady = (event) => {
  event.target.pauseVideo();
};

const opts = {
  height: "250",
  width: "350",
  playerVars: {
    autoplay: 1,
  },
};

const Home = () => {
  return (
    <div
      className="bg-cream-50 min-h-screen max-h-max py-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Header />
      <Introduction />
      <Footer />
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-2xl font-semibold mb-4 text-teal-800">
          TLDR Resume:
        </h1>
        <div className="relative">
          <YouTube
            videoId={"F0sO2eKuF7o"}
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

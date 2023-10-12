import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cream-100 via-teal-100 via-teal-200 via-teal-300 via-teal-400 via-teal-500 via-teal-600 via-teal-700 via-teal-800 to-teal-900 text-cream-100 py-4 shadow-md">
      <div
        className="container mx-auto flex flex-col justify-center items-center md:flex-row"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
				<Link href="/">
        <h1 className="text-2xl font-semibold md:mr-6 ml-10 bg-gradient-to-r text-transparent from-teal-900 via-green-300 to-teal-600 bg-clip-text">Sahar Mirkamrani</h1>
        </Link>
				<div className="container mx-auto flex flex-col justify-center items-center md:flex-row">
          <nav className="flex space-x-6">
            <Link href="/about-me">
              <div className="text-lg cursor-pointer transition-transform transform-gpu hover:rotate-45">
                About Me
              </div>
            </Link>
            <Link href="/projects">
              <div className="text-lg cursor-pointer transition-transform transform-gpu hover:rotate-45">
                Projects
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Header from "../components/Header"
import 'tailwindcss/tailwind.css'
import Introduction from "../components/Introduction";
import Footer from "../components/Footer"

const Home = () =>  {
  return (
    <div className="bg-cream-50 min-h-screen max-h-max py-24">
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
}

export default Home;
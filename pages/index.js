import Header from "../components/Header"
import 'tailwindcss/tailwind.css'
import Introduction from "../components/Introduction";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-cream-50 h-screen">
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
}

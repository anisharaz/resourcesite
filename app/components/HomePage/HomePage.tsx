import "./landing.scss";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeContent from "./components/HomeContent";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <HomeContent />
      <Footer />
    </div>
  );
}

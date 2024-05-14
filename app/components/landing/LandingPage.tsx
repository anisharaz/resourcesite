import "./landing.scss";
import Cards from "./card/cards";
import downArrow from "./assets/downArrow.svg";
import Image from "next/image";
import bgImage from "./assets/bgImage.svg";
import Footer from "./footer";
const Landing = () => {
  return (
    <div>
      <Hero />
      <HomeContent />
      <Footer />
    </div>
  );
};
export default Landing;

function Hero() {
  return (
    <div className="relative">
      <Image
        className="w-screen object-cover md:h-[30rem] lg:h-[40rem]"
        src={bgImage}
        alt="image"
      />
      <div className="absolute text-3xl md:text-5xl lg:text-6xl top-12 md:top-1/3 left-7 md:left-20 text-blue-600 font-extrabold flex flex-col gap-2">
        <div>One Place For All Notes & resources</div>
        <div className="text-base md:text-2xl lg:text-3xl text-[#56fdaa]">
          Scroll And Start Exploring Course wise
        </div>
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="HomeContent pb-6">
      <div className="flex justify-center py-3 pt-5">
        <Image
          className="bg-white rounded-full animate-bounce"
          src={downArrow}
          alt="Hero image"
        />
      </div>
      <Cards />
    </div>
  );
}

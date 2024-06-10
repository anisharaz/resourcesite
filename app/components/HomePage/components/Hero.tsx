import Image from "next/image";
import bgImage from "../assets/bgImage.svg";
export default async function Hero() {
  return (
    <div className="relative text-white max-h-screen">
      <Image
        className="w-screen object-cover md:h-[30rem] lg:h-[40rem]"
        src={bgImage}
        alt="image"
      />
      <div className="absolute text-3xl md:text-5xl lg:text-6xl top-12 md:top-1/3 left-7 md:left-20 font-extrabold flex flex-col gap-2 md:text-center">
        <div>
          One Place For{" "}
          <span className="stroke text-transparent">All Notes</span> & resources
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl">
          Scroll And Start Exploring Course wise
        </div>
      </div>
    </div>
  );
}

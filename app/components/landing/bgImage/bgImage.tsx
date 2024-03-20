import Image from "next/image"
import bgImage from "../assets/bgImage.jpeg";

export default function BgImage(){
    return(
        <div className="relative text-white text-3xl md:text-5xl lg:text-6xl">
            <Image className="w-full md:h-[30rem]" src={bgImage} alt="image"/>
            <div className="absolute top-1/3 left-20">Explore Notes & Question Banks</div>
        </div>
    )
}
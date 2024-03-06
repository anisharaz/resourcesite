import Image from "next/image";
import heroimage from "./assets/heroimage.png";
import "./homepage.scss";
import Typing from "./typing/Typing";
import Branch_selection from "./branch_selection_form";
function Homepage() {
  return (
    <div className="home bg-pri">
      <Branch_selection />
      <div className="flex w-full justify-center p-2 ">
        <div className="text-tert text-5xl leading-normal text-right w-fit tracking-wider underline underline-offset-8">
          Explore Notes <br /> & Question <br />
          Banks
        </div>
      </div>
      <div className="flex justify-center items-center mt-3 ">
        <Image src={heroimage} alt="" className="heroText w-auto h-32 p-4 " />
        <div className="heroText text-tert text-base text-center p-3 ">
          Hate Downloading ?, Yes !
          <br />
          Just Flip & Start Reading
        </div>
      </div>
      <Typing />
    </div>
  );
}

export default Homepage;

import Image from "next/image";
import heroimage from "./assets/heroimage.png";
import "./homepage.scss";
import Typing from "./typing/Typing";
import Branch_selection from "./branch_selection_form";
function Homepage() {
  return (
    <div className="home bg-pri">
      <Branch_selection />
      <div className="flex justify-center p-2 ">
        <div className="text-tert text-5xl leading-normal text-right tracking-wider underline underline-offset-8">
          Explore Notes <br className="2xl:hidden" /> & Question{" "}
          <br className="2xl:hidden" />
          Banks
        </div>
      </div>
      <div className="flex 2xl:gap-44 justify-center items-center mt-3 2xl:mt-14">
        <Image
          src={heroimage}
          alt=""
          className="heroText w-auto h-32 2xl:h-40 p-4 "
        />
        <div className="heroText text-tert text-base text-center p-3 2xl:text-2xl ">
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

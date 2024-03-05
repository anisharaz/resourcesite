import Image from "next/image";
import heroimage from "./assets/heroimage.png";
import "./homepage.scss";
import Typing from "./typing/Typing";
function Homepage() {
  return (
    <div className="home bg-pri">
      <form className="max-w-sm mx-auto pt-2 ">
        <select
          id="countries"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select Branch </option>
          <option value="cse">CSE</option>
          <option value="iot">IOT</option>
          <option value="AIML">AIML</option>
          <option value="cyse">Cyber Se.</option>
        </select>
      </form>
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

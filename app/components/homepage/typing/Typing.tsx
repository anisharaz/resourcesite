import Image from "next/image";
import giphy from "../assets/giphy.gif";

function Typing() {
  return (
    <div className="mx-auto w-fit bg-red-400 mt-8 rounded-2xl overflow-hidden shadow-md shadow-neutral-300">
      <Image src={giphy} width={300} alt="image" className="typing" />
    </div>
  );
}

export default Typing;

import Image from "next/image";
import giphy from "../assets/giphy.gif"

function Typing() {
  return (
    <div className="flex justify-center mt-10">
        <Image src={giphy} width={300} alt="image" />
    </div>
  )
}

export default Typing;

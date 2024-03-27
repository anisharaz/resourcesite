import downArrow from "../assets/downArrow.svg"
import Image from "next/image"

const Bounce = () => {
    return(
        <div className="flex justify-center my-4">
            <Image className="bg-white rounded-full animate-bounce w-6 h-6" src={downArrow} alt="image"/>
        </div>
    )
}
export default Bounce;
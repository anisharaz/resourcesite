import Cards from "./cards/cards";
import BgImage from "./bgImage/bgImage";
import Bounce from "./bounce/bounce";

const Landing = () => {
  return(
    <div className="bg-[#070041]">
      <BgImage />
      <Bounce />
      <Cards />
    </div>
  )
}
export default Landing;
import "./navbar.scss";
import Image from "next/image";
import logo from "./assets/logo.png";
import Link from "next/link";
import home from "../../../public/icons8-home (1).svg";
import contact from "../../../public/icons8-contact-50.png";
function Navbar() {
  return (
    <div className="navbar flex text-tert w-full bg-sec h-12">
      <a href="#">
        <div className="flex content-center items-center p-3">
          <Image src={logo} alt="" className="logo h-7 w-auto rounded-full" />
        </div>
      </a>
      <div className="flex justify-end w-full items-center gap-2 sm:gap-14 md:gap-16 2xl:gap-24  pr-2">
        <Link href="/">
          <div className="flex content-center items-center">
              <Image 
                src={home}
                alt="home"
              />
              
              <div className="ml-2">
                Home
              </div>
          </div>
        </Link>
        <div>|</div>
        {/* <Link > */}
        <div className="cursor-pointer">
          About
        </div>
        {/* </Link> */}
        <div>|</div>
        {/* <Link> */}
        <div className="flex content-center items-center cursor-pointer">
            <Image
                width={25}
                src={contact}
                alt="contact"
              />
            <div className="ml-2">Contact</div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Navbar;

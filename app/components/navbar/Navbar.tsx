import "./navbar.scss";
import Image from "next/image";
import logo from "./assets/logo.png";
import home_logo from "./assets/home_icon.svg";
import contact_logo from "./assets/contact_icon.svg";
import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar flex text-tert w-full bg-sec h-12">
      <Link href="/">
        <div className="flex content-center items-center p-3">
          <Image src={logo} alt="" className="logo h-7 w-auto rounded-full" />
        </div>
      </Link>
      <div className="flex justify-end w-full items-center gap-2 sm:gap-14 2xl:gap-3  pr-2">
        <Link href="/">
          <div className="flex content-center items-center 2xl:p-2 2xl:w-28 hover:bg-indigo-900 hover:p-2 rounded-xl">
            <Image src={home_logo} alt="home" className="text-tert" />
            <div className="ml-1 ">Home</div>
          </div>
        </Link>
        <div>|</div>
        {/* <Link > */}
        <div className="cursor-pointer 2xl:p-2 2xl:w-28 hover:bg-indigo-900 hover:p-2 rounded-xl text-center">
          About
        </div>
        {/* </Link> */}
        <div>|</div>
        {/* <Link> */}
        <div className="flex content-center items-center cursor-pointer 2xl:p-2 hover:bg-indigo-900 hover:p-2 rounded-xl ">
          <Image src={contact_logo} alt="contact" />
          <div className="ml-1">Contact</div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Navbar;

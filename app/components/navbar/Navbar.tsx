import "./navbar.scss";
import Image from "next/image";
import logo from "./assets/logo.png";
import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar flex text-tert w-full bg-sec h-12">
      <Link href="/">
        <div className="flex content-center items-center p-3">
          <Image src={logo} alt="" className="logo h-7 w-auto rounded-full" />
        </div>
      </Link>
      <div className="flex justify-end w-full items-center gap-2 sm:gap-14 2xl:gap-3  pr-2 text-sm 2xl:text-base">
        <Link href="/">
          <div className="cursor-pointer 2xl:p-2 2xl:w-28 2xl:hover:bg-indigo-900 2xl:hover:p-2 rounded-xl text-center underline underline-offset-4">
            Home
          </div>
        </Link>
        <div>|</div>
        <div className="cursor-pointer 2xl:p-2 2xl:w-28 2xl:hover:bg-indigo-900 2xl:hover:p-2 rounded-xl text-center underline underline-offset-4">
          About
        </div>
        <div>|</div>
        <div className="cursor-pointer 2xl:p-2 2xl:w-28 2xl:hover:bg-indigo-900 2xl:hover:p-2 rounded-xl text-center underline underline-offset-4">
          Contact
        </div>
        <div>|</div>
        <Link href="/admin">
          <div className="cursor-pointer 2xl:p-2 2xl:w-28 2xl:hover:bg-indigo-900 2xl:hover:p-2 rounded-xl text-center underline underline-offset-4">
            Admin
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

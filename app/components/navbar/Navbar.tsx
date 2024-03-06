import "./navbar.scss";
import Image from "next/image";
import logo from "./assets/logo.png";
import Link from "next/link";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </div>
        </Link>
        <div>|</div>
        {/* <Link > */}
        <div className="">About</div>
        {/* </Link> */}
        <div>|</div>
        {/* <Link> */}
        <div className="flex content-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
            />
          </svg>
          Contact
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Navbar;

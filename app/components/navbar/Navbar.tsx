import "./navbar.scss";
import Image from "next/image";
import logo from "./assets/logo.png";
function Navbar() {
  return (
    <div className="navbar flex text-tert text-4xl w-full bg-sec">
      <Image src={logo} alt="" className="h-full  w-auto p-5 rounded-full" />
      <div className="flex justify-end w-full items-center gap-6">
        <div className="mr-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Home
        </div>
        <div className="mr-4">About</div>
        <div className="mr-4">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;

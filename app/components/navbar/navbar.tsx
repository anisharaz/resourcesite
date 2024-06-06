import * as React from "react";
import { Button } from "@/components/ui/button";
import logo from "./assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobileNav/MobileNav";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = function () {
  return (
    <div className="flex justify-between bg-lsec text-ltext dark:bg-dpri dark:text-dtext p-2 items-center sticky top-0 z-50">
      <Link href={"/"}>
        <div className="flex content-center items-center p-1 gap-1 bg-[#262EF3] rounded-xl px-2">
          <Image src={logo} alt="" className="logo h-7 w-auto rounded-full" />
          <div className="text-orange-300 text-xl">RaidRead</div>
        </div>
      </Link>
      <div className="hidden md:flex md:gap-2 justify-center items-center">
        <Button size={"nav"} variant="link">
          <Link href={"/"} className="">
            Home
          </Link>
        </Button>
        <Button size={"nav"} variant="link">
          <Link href={"/admin"} className="">
            Admin
          </Link>
        </Button>
        <Button size={"nav"}>
          <Link
            href={"https://github.com/anisharaz/resourcesite.git"}
            target="_blank"
          >
            Github
          </Link>
        </Button>
        <ThemeToggle />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};
export default Navbar;

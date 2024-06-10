import * as React from "react";
import { Button } from "@/components/ui/button";
import logo from "./assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobileNav/MobileNav";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = function () {
  return (
    <div className="flex justify-between bg-lback/80 dark:bg-dback/80 lg:p-2 p-1 items-center sticky top-0 z-50">
      <Link href={"/"}>
        <div className="flex content-center items-center p-1 gap-1 rounded-xl px-2">
          <Image src={logo} alt="" className="logo h-7 w-auto rounded-full" />
          <div className="text-black dark:text-dacc text-xl">RaidRead</div>
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
        <Button size={"nav"} variant={"my_default"}>
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

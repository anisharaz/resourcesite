import * as React from "react";
import { Button } from "@/components/ui/button";
import logo from "../../app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";
import { MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
        {/* Mobile View NavBar */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Drawer>
            <DrawerTrigger asChild>
              <div className="flex justify-end">
                <Button style={{ background: "#301E67" }} size={"nav"}>
                  <MenuIcon className="text-white h-5 w-5" />
                </Button>
              </div>
            </DrawerTrigger>
            <DrawerContent
              style={{ background: "#070041" }}
              className="text-white"
            >
              <Button variant="link">
                <Link href={"/"} className="text-white">
                  Home
                </Link>
              </Button>
              <Button variant="link">
                <Link href={"/admin"} className="text-white">
                  Admin
                </Link>
              </Button>
              <Button variant="link">
                <Link
                  href={"https://github.com/anisharaz/resourcesite.git"}
                  className="text-white"
                >
                  Github
                </Link>
              </Button>
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button style={{ background: "#070041" }} variant="outline">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

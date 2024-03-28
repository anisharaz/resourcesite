import * as React from "react"

import { Button } from "@/components/ui/button"
import logo from "../assets/logo.png"
import Image from "next/image";
import Link from "next/link"
import MobileNav from "../mobileNav/mobileNav"

const Navbar = function() {

  return (
      <div className="flex justify-between bg-[#301E67] p-2">
        <div className="ml-2 mt-2">
          <Image src={logo} alt="" className="logo h-7 w-auto rounded-full" />
        </div>
        <div className="hidden md:flex">
          <Button className="mr-4 text-xl text-white" variant="link"><Link href={"/"}>Home</Link></Button>
          <Button className="mr-4 text-xl text-white" variant="link"><Link href={"/admin"}>Admin</Link></Button>
          <Button className="mr-4 text-xl text-white" variant="link"><Link href={"/"}>About</Link></Button>
          <Button className="mr-4 text-xl text-white" variant="link"><Link href={"/"}>Contact</Link></Button>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
  )
}
export default Navbar;
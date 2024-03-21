'use client'

import * as React from "react"

import {useMediaQuery} from '@react-hook/media-query'
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import logo from "../assets/logo.png"
import Image from "next/image";
import Link from "next/link"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState, useEffect } from 'react'

export default function() {
  const [isClient, setIsClient] = useState(false)
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isDesktop) {
    return (
        <div className="flex justify-between bg-[#301E67] p-3">
          <div className="ml-2 mt-2">
             <Image src={logo} alt="" className="logo h-7 w-auto rounded-full" />
          </div>
          <div>
            { isClient ? <><Button className="mr-4 text-xl text-white" variant="link"><Link href={"/"}>Home</Link></Button><Button className="mr-4 text-xl text-white" variant="link"><Link href={"/admin"}>Admin</Link></Button><Button className="mr-4 text-xl text-white" variant="link"><Link href={"/"}>About</Link></Button><Button className="mr-4 text-xl text-white" variant="link"><Link href={"/"}>Contact</Link></Button></> : ""}
          </div>
        </div>
    )
  }

  return (
      <div className="flex justify-between bg-[#301E67] p-3">
        <div className="ml-2 mt-2">
          <Image src={logo} alt="" className="logo h-7 w-auto rounded-full" />
        </div>
        <div>
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <div className="flex justify-end">
                  <Button style={{background: "#301E67"}}>
                      {/* Burger menu icon */}
                      <MenuIcon className="text-white h-5 w-5" />  
                  </Button>
                </div>
              </DrawerTrigger>
              <DrawerContent style={{background: "#070041"}} className=" text-white">
                <DrawerHeader className="text-centre">
                  <DrawerTitle>Choose an option</DrawerTitle>
                </DrawerHeader>
                <Button variant="link"><Link href={"/"} className="text-white">Home</Link></Button>
                <Button variant="link"><Link href={"/admin"} className="text-white">Admin</Link></Button>
                <Button variant="link"><Link href={"/"} className="text-white">About</Link></Button>
                <Button variant="link"><Link href={"/"} className="text-white">Contact</Link></Button>
                <DrawerFooter className="pt-2">
                  <DrawerClose asChild>
                    <Button style={{background: "#070041"}} variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
        </div>
      </div>
  )
}

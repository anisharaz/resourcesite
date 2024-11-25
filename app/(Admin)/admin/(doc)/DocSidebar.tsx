"use client";
import {
  // CreditCard,
  WalletIcon,
  // Cog,
  // PackagePlus,
} from "lucide-react";
import Link from "next/link";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion@sidebar";

function DocSideBar() {
  return (
    <div
      className="px-1 pt-2 48 xl:w-60 hidden lg:block border-r-2 border-white/10"
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      <Link
        href="/admin/docs"
        className="flex items-center p-2  rounded-lg hover:bg-black/80 group "
      >
        <WalletIcon className="group-hover:opacity-100 opacity-50" />
        <span className="flex-1 ms-3 whitespace-nowrap">Programs</span>
      </Link>
      <Link
        href="/admin/docs"
        className="flex items-center p-2  rounded-lg hover:bg-black/80 group "
      >
        <WalletIcon className="group-hover:opacity-100 opacity-50" />
        <span className="flex-1 ms-3 whitespace-nowrap">Departments</span>
      </Link>
      <Link
        href="/admin/docs"
        className="flex items-center p-2  rounded-lg hover:bg-black/80 group "
      >
        <WalletIcon className="group-hover:opacity-100 opacity-50" />
        <span className="flex-1 ms-3 whitespace-nowrap">Branch</span>
      </Link>

      {/* <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center p-2  rounded-lg hover:bg-black/80 group ">
            <div className="flex">
              <CreditCard />
              <span className="ms-3 whitespace-nowrap">Payment</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-6 ">
            <Link
              href="/user/payment/setup"
              className="flex items-center p-2  rounded-lg hover:bg-black/80 group "
            >
              <Cog className="group-hover:opacity-100 opacity-50" />
              <span className="flex-1 ms-3 whitespace-nowrap">Setup</span>
            </Link>
            <Link
              href="/user/payment/create"
              className="flex items-center p-2  rounded-lg hover:bg-black/80 group "
            >
              <PackagePlus className="group-hover:opacity-100 opacity-50" />
              <span className="flex-1 ms-3 whitespace-nowrap">Create</span>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}

export default DocSideBar;

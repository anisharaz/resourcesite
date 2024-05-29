"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { v4 } from "uuid";

function Navigator() {
  const params = useParams();
  const path = usePathname();
  const patharray = path.split("/").filter((x) => x != "" && x != "view");
  const popped = patharray.pop();
  const crum_element = Object.keys(params)
    .slice(1)
    .map((key, index) => {
      return (
        <div className="flex flex-wrap items-center gap-2" key={v4()}>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={(() => {
                let url = "/view/";
                for (let i = 0; i < index + 1; i++) {
                  url += patharray[i] + "/";
                }
                return url;
              })()}
            >
              {(() => {
                switch (key) {
                  case "sem":
                    return "Semesters";
                  case "subject_code":
                    return "Subjects";
                  case "mod_view":
                    return "Modules";
                }
              })()}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </div>
      );
    });
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {crum_element}
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white">Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default Navigator;

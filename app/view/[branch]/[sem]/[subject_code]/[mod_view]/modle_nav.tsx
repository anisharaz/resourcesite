"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
function Module_nav({ url, name }: { url: string; name: string }) {
  const router = useRouter();
  return (
    <>
      <div className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-sky-400">
        <button
          className="flex items-center"
          onClick={() => {
            router.replace(url);
          }}
        >
          <div className="text-lg lg:text-3xl pr-1">{name}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Module_nav;

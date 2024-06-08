import Image from "next/image";
import { Suspense } from "react";
import { BranchCardSkeletons } from "../../CompSkeletons";
import Cards from "./card/BranchCards";
import downArrow from "../assets/downArrow.svg";

async function HomeContent() {
  return (
    <div className="bg-lpri pb-6 border-t-2 border-b-2">
      <div className="flex justify-center py-3 pt-5">
        <Image
          className="bg-lacc dark:bg-dacc rounded-full animate-bounce"
          src={downArrow}
          alt="Hero image"
        />
      </div>
      <div className="flex flex-col gap-5 md:grid grid-cols-2 md:gap-4 lg:grid-cols-3">
        <Suspense fallback={<BranchCardSkeletons />}>
          <Cards />
        </Suspense>
      </div>
    </div>
  );
}

export default HomeContent;

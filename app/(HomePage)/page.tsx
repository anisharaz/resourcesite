import "./HomePage.css";
import Hero from "./Hero";
import Footer from "./Footer";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
import Cards from "./BranchCards";
import { BranchCardSkeletons } from "@/components/ui/Skeletons";
export default async function Home() {
  return (
    <>
      <Hero />
      <div className="bg-lpri dark:bg-dpri p-6 pt-10">
        <div className="grid grid-cols-3">
          <Suspense fallback={<BranchCardSkeletons />}>
            <Cards />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Link from "next/link";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/navbar/footer";
export default async function Home() {
  return (
    <div className="">
      <Homepage />
      <Footer />
    </div>
  );
}

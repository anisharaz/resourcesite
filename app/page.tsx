// "use client";
import Link from "next/link";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/navbar/footer";
import { put_branch } from "./actions/database";
export default async function Home() {
  // const data = {
  //   branch: "cse",
  //   sem: 3,
  //   subjectcodes: {
  //     java: "jv",
  //     os: "os",
  //     python: "py",
  //   },
  // };
  return (
    <div className="">
      {/* <button
        onClick={async () => {
          await put_branch(data);
        }}
      >
        upload
      </button> */}
      {/* <Homepage /> */}
      {/* <Link href="/branch_view">branch_view</Link>
      <br />
      <Link href="/modules_view">modules_view</Link>
      <br />
      <Link href="/subject_view">subject_view</Link> */}
      {/* <Footer /> */}
    </div>
  );
}

// "use client";
import Link from "next/link";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/navbar/footer";
import { put_branch, put_subjects_module } from "./actions/database";
export default async function Home() {
  // const data_branch = {
  //   branch: "cse",
  //   sem: 3,
  //   subjectcodes: {
  //     java: "jv",
  //     os: "os",
  //     python: "py",
  //   },
  // };
  // const data_submodule = {
  //   subCode: "c++",
  //   module: {
  //     module1: "/path/to/module/1",
  //     module2: "/path/to/module/2",
  //     module3: "/path/to/module/3",
  //   },
  // };
  return (
    <div className="">
      {/* <button
        onClick={async () => {
          await put_subjects_module(data_submodule);
        }}
      >
        upload
      </button> */}
      {/* <Homepage /> */}
      <Link
        href={{
          pathname: "/branch_view",
          query: { branch_code: "cse" },
        }}
      >
        branch_view
      </Link>
      <br />
      <Link
        href={{
          pathname: "/modules_view",
          // query: { subject_code: "java" },
        }}
      >
        module_view
      </Link>
      <br />
      <Link
        href={{
          pathname: "/subject_view",
          query: { subject_code: "java", subject_name: "java" },
        }}
      >
        subject_view
      </Link>
      {/* <Footer /> */}
    </div>
  );
}

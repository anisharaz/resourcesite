"use client";
import { SingleCard } from "./card";
import web from "../assets/web.jpeg";
import { useEffect, useState } from "react";
import { BranchCardSkeletons } from "../../skeletons";

type branch = {
  branch_code: string;
  status: string;
  branch_name: string;
}[];
function FetchedCards() {
  const [branch, setBranch] = useState<branch>([]);
  useEffect(() => {
    fetch("/api/branch").then((res) => {
      res.json().then((data) => {
        setBranch(data);
      });
    });
  }, []);

  const branch_card = branch.map((item, index) => {
    return (
      <SingleCard
        image={web}
        courseName={item.branch_name}
        note={item.status}
        path={`/view/${item.branch_code}`}
        key={index}
      />
    );
  });
  if (branch.length == 0) {
    return <BranchCardSkeletons />;
  }
  return <>{branch_card}</>;
}

export default FetchedCards;

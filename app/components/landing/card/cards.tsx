"use client";
import FetchedCards from "./FetchedCards";
export function Cards() {
  return (
    <>
      <div className="flex flex-col gap-5 md:grid grid-cols-2 md:gap-4 lg:grid-cols-3">
        <FetchedCards />
      </div>
    </>
  );
}

export default Cards;

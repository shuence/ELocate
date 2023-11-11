import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="px-4 w-full py-16 lg:py-24 md:pb-32 md:container text-center">
      <div className="flex flex-col items-center justify-center px-10">
        <div className="text-black section-subtitle text-center font-bold text-2xl md:text-4xl 2xl:text-6xl uppercase tracking-widest teamHeadingText">
          -Page is under construction -
        </div>
        <div className="text-black text-center text-xl md:text-3xl mt-4">
          Oops! The page you are looking for will soon available.
        </div>
        <Link href="/">
          <p className="bg-emerald-500 text-white font-bold text-xl py-3 px-6 mt-8 rounded-full hover:bg-white-700">
            Go Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

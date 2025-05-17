// import axios from "../../utills/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Sidenav = () => {

 
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-200 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">FlimMora</span>
      </h1>
      <nav className="flex flex-col text-zinc-400  gap-2">
        <h1 className="text-white font-semibold text-xl mt-5">New Feeds</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-fire-line"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-movie-2-ai-line"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-tv-2-line mr-2"></i>Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-team-fill mr-3"></i>Peoples
        </Link>
      </nav>

      <hr className="bg-zinc-300 border-none h-[1px] mt-2 " />
      <nav className="flex flex-col text-zinc-400  gap-2">
        <h1 className="text-white font-semibold text-xl mt-5">Website information</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-information-fill mr-2"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-phone-fill mr-2"></i>Contect
        </Link>{" "}
      </nav>
    </div>
  );
};

export default Sidenav;

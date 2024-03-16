import React from "react";

import workingMan from "../../assets/workingman.png";
import { HiOutlineSearch } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="p-2 md:bg-[#F2F3F6] px-40 flex items-center justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="md:text-5xl font-bold leading-6">
            Find <span className="text-[#1A75E8]">Remote</span>
          </div>
          <div className="md:text-5xl font-bold leading-6">
            Job in <span className="text-[#1A75E8]">Worldwide_</span>
          </div>
        </div>
        <div className="text-[#82888e]">
          Work remotely to companies worldwide
        </div>
        <div>
          <form className="bg-white inline-flex items-center p-2 rounded-md gap-2">
            <HiOutlineSearch />
            <input type="text" className="outline-none" />
            <button className="bg-[#1A75E8] text-white p-2 rounded-md">
              Search
            </button>
          </form>
        </div>
        <div className="text-sm text-[#a3a4a7] flex items-center gap-3">
          <div>Example:</div>
          <div className="">Frontend</div>
          <div>Backend</div>
          <div>Designer</div>
        </div>
      </div>
      <div className="pb-6">
        <img src={workingMan} alt="Working Man" />
      </div>
    </div>
  );
};

export default Hero;

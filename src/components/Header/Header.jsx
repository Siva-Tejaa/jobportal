import React from "react";

//Image Imports
import JobGenielogo from "../../assets/JobGenieLogo.png";
import JobGenieText from "../../assets/JobGenieText.png";

const Header = () => {
  return (
    <div className="p-2 shadow-lg flex items-center justify-between md:bg-[#F2F3F6] px-40 shadow-none">
      <div className="flex items-center">
        <img src={JobGenielogo} alt="Job Genie" className="w-16" />
        <img src={JobGenieText} alt="Job Genie" className="w-32" />
      </div>
      <div>
        <button className="text-sm font-semibold leading-6 bg-[#1A75E8] text-white px-4 py-2 rounded-md hover:bg-[#5e9be5]">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;

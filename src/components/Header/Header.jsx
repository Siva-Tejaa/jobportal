import React from "react";

//Image Imports
import JobGenielogo from "../../assets/JobGenieLogo.png";
import JobGenieText from "../../assets/JobGenieText.png";

import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="p-2 shadow-lg flex items-center justify-between bg-[#F2F3F6] md:px-40 md:shadow-none">
      <div className="flex items-center">
        <img src={JobGenielogo} alt="Job Genie" className="w-16" />
        <img src={JobGenieText} alt="Job Genie" className="w-32" />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <button className="text-sm font-semibold leading-6 bg-[#1A75E8] text-white px-4 py-2 rounded-md hover:bg-[#5e9be5]">
            Sign in
          </button>
        </div>
        <div className="md:hidden">
          <RxHamburgerMenu fontSize="30px" />
        </div>
      </div>
    </div>
  );
};

export default Header;

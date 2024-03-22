import React, { useContext, useState } from "react";

//Image Imports
import JobGenielogo from "../../assets/JobGenieLogo.png";
import JobGenieText from "../../assets/JobGenieText.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

import { Context } from "../../utils/Context";

const Header = () => {
  const { isLoggedIn, logOutHandler, userDetails } = useContext(Context);

  const { firstname, lastname, email, createdAt, updatedAt } = isLoggedIn
    ? JSON.parse(localStorage.getItem("userDetails"))?.user
    : {};

  const userImage = isLoggedIn
    ? (firstname.slice(0, 1) + lastname.slice(0, 1)).toLowerCase()
    : "";

  return (
    <div className="p-2 shadow-lg flex items-center justify-between bg-[#F2F3F6] md:px-40 md:shadow-none">
      <Link to="/" className="flex items-center">
        <img src={JobGenielogo} alt="Job Genie" className="w-16" />
        <img src={JobGenieText} alt="Job Genie" className="w-32" />
      </Link>
      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/user-details">
              <img
                src={`https://cdn.auth0.com/avatars/${userImage}.png`}
                width="40px"
                className="rounded-full"
                title={firstname + " " + lastname}
              />
            </Link>

            <button
              onClick={logOutHandler}
              className="text-sm font-semibold leading-6 bg-[#1A75E8] text-white px-4 py-2 rounded-md hover:bg-[#5e9be5]"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="text-sm font-semibold leading-6 bg-[#1A75E8] text-white px-4 py-2 rounded-md hover:bg-[#5e9be5]">
              Sign in
            </button>
          </Link>
        )}
        <div className="md:hidden">
          <RxHamburgerMenu fontSize="30px" />
        </div>
      </div>
    </div>
  );
};

export default Header;

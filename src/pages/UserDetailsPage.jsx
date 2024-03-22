import React from "react";
import Header from "../components/Header/Header";

const UserDetailsPage = () => {
  const { firstname, lastname, email, createdAt, updatedAt } = JSON.parse(
    localStorage.getItem("userDetails")
  )?.user;
  const userImage = (
    firstname.slice(0, 1) + lastname.slice(0, 1)
  ).toLowerCase();
  return (
    <div>
      <Header />
      <div className="flex gap-6  m-20">
        <div className="border-r-2">
          <img
            src={`https://cdn.auth0.com/avatars/${userImage}.png`}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <b>First Name : </b>
            {firstname}
          </div>
          <div>
            <b>Last Name :</b> {lastname}
          </div>
          <div>
            <b>Email :</b> {email}
          </div>
          <div>
            <b>User Created :</b> {createdAt}
          </div>
          <div>
            <b>Last Profile Updated :</b> {updatedAt}
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#1A75E8] p-4 m-4 rounded-md text-white">
          Update User Details
        </button>
      </div>
    </div>
  );
};

export default UserDetailsPage;

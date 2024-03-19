import React, { useState } from "react";
import JobGenieLogo from "../../assets/JobGenieLogo.png";
import { USER_REGISTER } from "../../utils/api/JobsApi";

import { useNavigate } from "react-router-dom";

import useAPIPost from "../../utils/customHooks/useAPIPost";

const UserSignup = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [registerData, setRegisterData] = useState(initialValues);

  const { firstname, lastname, email, password } = registerData;

  const { loading, response, error, postData } = useAPIPost();

  const registerChangeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(registerData);

    const url = USER_REGISTER;

    const res = await postData(url, registerData);

    setRegisterData(initialValues);

    // Redirect to login page on successful registration
    if (res?.success == true) {
      alert("User Account Created");
      navigate("/login");
    } else {
      alert(`Something Went Wrong...Please Try Again.. ${res?.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={JobGenieLogo} />
      <form
        className="bg-[#F2F3F6] p-6 flex flex-col items-center gap-6"
        onSubmit={formSubmitHandler}
      >
        <p className="font-bold">SignUp/Register</p>
        <div className=" flex items-center gap-4 w-[100%]">
          <input
            type="text"
            placeholder="First Name"
            className="p-1 w-[100%]"
            name="firstname"
            value={firstname}
            onChange={registerChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-1 w-[100%]"
            name="lastname"
            value={lastname}
            onChange={registerChangeHandler}
            required
          />
        </div>
        <div className="w-[100%]">
          <input
            type="email"
            placeholder="Email"
            className="p-1 w-[100%]"
            name="email"
            value={email}
            onChange={registerChangeHandler}
            required
          />
        </div>
        <div className="w-[100%]">
          <input
            type="password"
            placeholder="Password"
            className="p-1 w-[100%]"
            name="password"
            value={password}
            onChange={registerChangeHandler}
            required
          />
        </div>
        <div className="w-[100%]">
          <button
            className={
              loading
                ? "p-1 bg-[#b8cfec] text-white w-[100%] cursor-not-allowed"
                : "p-1 bg-[#1A75E8] text-white w-[100%]"
            }
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
      {/* {response && <p>Success - {JSON.stringify(response)}</p>}
      {error && <p>Error - {JSON.stringify(error)}</p>} */}
    </div>
  );
};

export default UserSignup;

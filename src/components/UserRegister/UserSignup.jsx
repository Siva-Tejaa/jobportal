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

  const registerChangeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const { loading, apiResponse, apiError, postAPI } = useAPIPost({
    URL: USER_REGISTER,
    postData: registerData,
    AuthToken: "",
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(registerData);

    try {
      await postAPI({ URL: USER_REGISTER, postData: registerData });
      // Redirect or perform any action after successful registration
      alert("User Created");
      console.log(apiResponse);
      navigate("/login");
    } catch (error) {
      // Handle error if registration fails
      alert("Something Went Wrong");

      console.error("Registration failed:", error);
    }

    // if (apiError) {
    //   alert("Something Went Wrong");
    //   console.log("Something Went Wrong ${apiError}");
    // } else {
    //   alert("User Created");
    //   console.log(apiResponse);
    // }

    setRegisterData(initialValues);
  };

  //   useEffect(() => {
  //     setAPIResponse(apiResponse);
  //   }, [apiResponse]);

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
    </div>
  );
};

export default UserSignup;

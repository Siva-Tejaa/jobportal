import React, { useState, useContext } from "react";
import JobGenieLogo from "../../assets/JobGenieLogo.png";
import { USER_LOGIN } from "../../utils/api/JobsApi";

import { Link, useNavigate } from "react-router-dom";

import useAPIPost from "../../utils/customHooks/useAPIPost";

//importing Context
import { Context } from "../../utils/Context";

const UserLogin = () => {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn, userDetails, setUserDetails } =
    useContext(Context);

  const initialValues = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialValues);

  const { email, password } = loginData;

  const { loading, response, error, postData } = useAPIPost();

  const loginChangeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value.replace(/\s/g, ""),
    });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(loginData);

    const url = USER_LOGIN;

    const res = await postData(url, loginData);

    setLoginData(loginData);

    // Redirect to login page on successful registration
    if (res?.success == true) {
      //Destructuring User
      const { firstname, lastname, _id, email } = res?.user;
      const fullName = `${firstname} ${lastname}`;

      //Storing Data in Local Storage
      localStorage.setItem("jwtToken", res?.jwtToken);
      localStorage.setItem("userId", _id);
      localStorage.setItem("userName", fullName);
      localStorage.setItem("email", email);

      localStorage.setItem("userDetails", JSON.stringify(res));

      setUserDetails(res);
      setIsLoggedIn(true);

      setLoginData(initialValues);

      navigate("/dashboard");
    } else {
      alert(`Something Went Wrong...Please Try Again.. ${res?.message}`);
      setLoginData(initialValues);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={JobGenieLogo} />
      <form
        className="bg-[#F2F3F6] p-6 flex flex-col items-center gap-6"
        onSubmit={formSubmitHandler}
      >
        <p className="font-bold">Login</p>

        <div className="w-[100%]">
          <input
            type="email"
            placeholder="Email"
            className="p-1 w-[100%]"
            name="email"
            value={email}
            onChange={loginChangeHandler}
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
            onChange={loginChangeHandler}
            minLength="6"
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
            {loading ? "Signing in..." : "Signin"}
          </button>
        </div>
      </form>
      {/* {response && <p>Success - {JSON.stringify(response)}</p>}
      {error && <p>Error - {JSON.stringify(error)}</p>} */}
      <div>
        Don't Have an Account ?
        <Link to="/register" className="text-sky-600">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

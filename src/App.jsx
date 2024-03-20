import React, { useState, useEffect } from "react";
import "./App.css";

//React Router
import { Routes, Route, Navigate } from "react-router-dom";

//Context
import { Context } from "./utils/Context";

//Pages
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    //Checking whether the user is logged in or not
    const userKey = localStorage.getItem("jwtToken");
    console.log(userKey);
    if (userKey) {
      setIsLoggedIn(true);
    }
    // You can perform your authentication check here
    // const userIsAuthenticated = true;
    // setIsLoggedIn(userIsAuthenticated);
  }, []);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Context.Provider
      value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
      </Routes>
    </Context.Provider>
  );
};

export default App;

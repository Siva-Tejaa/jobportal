import React, { useState, useEffect } from "react";
import "./App.css";

//React Router
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

//Context
import { Context } from "./utils/Context";

//Pages
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import PageNotFound from "./pages/PageNotFound";
import AllJobsPage from "./pages/AllJobsPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("jwtToken")
  );
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const navigate = useNavigate();

  const logOutHandler = () => {
    setUserDetails(null);
    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  const RequireAuth = ({ children }) => {
    console.log(isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userDetails,
        setUserDetails,
        logOutHandler,
      }}
    >
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/register" element={<SignupPage />} />
        <Route exact path="/login" element={<SigninPage />} />
        <Route exact path="/alljobs" element={<AllJobsPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;

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
import UserDetailsPage from "./pages/UserDetailsPage";
import PostJobPage from "./pages/PostJobPage";
import UpdateJobPage from "./pages/UpdateJobPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("jwtToken")
  );
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      setIsLoggedIn(true);
      const userDet = localStorage.getItem("userDetails");
      setUserDetails(JSON.parse(userDet));
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

  const AfterLogin = ({ children }) => {
    return isLoggedIn ? <Navigate to="/" /> : children;
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
        <Route
          exact
          path="/register"
          element={
            <AfterLogin>
              <SignupPage />
            </AfterLogin>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <AfterLogin>
              <SigninPage />
            </AfterLogin>
          }
        />
        <Route exact path="/alljobs" element={<AllJobsPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/user-details"
          element={
            <RequireAuth>
              <UserDetailsPage />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/postjob"
          element={
            <RequireAuth>
              <PostJobPage />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/updatejob/:jobid"
          element={
            <RequireAuth>
              <UpdateJobPage />
            </RequireAuth>
          }
        />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;

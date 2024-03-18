import React from "react";
import "./App.css";

//React Router
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<SigninPage />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";

import useAPIFetch from "../utils/customHooks/useAPIFetch";
import LatestJobs from "../components/LatestJobs/LatestJobs";

const HomePage = () => {
  // const url = ALL_JOBS;
  // const authToken = "";

  // Call the useAPIFetch hook outside of useEffect
  // const { loading, data, error } = useAPIFetch(url, authToken);

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <LatestJobs />
      <Link to="/alljobs">
        <button className="p-2 bg-indigo-500 text-white rounded-md">
          More Jobs
        </button>
      </Link>
    </>
  );
};

export default HomePage;

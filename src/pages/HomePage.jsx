import React, { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";

import useAPIFetch from "../utils/customHooks/useAPIFetch";
import { ALL_JOBS } from "../utils/api/JobsApi";

const HomePage = () => {
  const url = ALL_JOBS;
  const authToken = "";

  // Call the useAPIFetch hook outside of useEffect
  const { loading, data, error } = useAPIFetch(url, authToken);

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
      {!loading && !error && <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";

import useAPIFetch from "../utils/customHooks/useAPIFetch";

const HomePage = () => {
  const [userApiResponse, setUserApiResponse] = useState([]);
  const [userApiError, setUserApiError] = useState(null);

  const testAPI = "https://jsonplaceholder.typicode.com/users";

  // Call the useAPIFetch hook outside of useEffect
  const { apiResponse, loading, apiError } = useAPIFetch({ apiUrl: testAPI });

  useEffect(() => {
    if (apiError) {
      setUserApiError(apiError);
    } else {
      setUserApiResponse(apiResponse);
    }
  }, [apiResponse, apiError]);

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      {loading && <p>Loading...</p>}
      {userApiError && <p>Error: {JSON.stringify(userApiError)}</p>}
      {!loading && !userApiError && <p>{JSON.stringify(userApiResponse)}</p>}
    </>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";

import useAPIFetch from "../utils/customHooks/useAPIFetch";

const HomePage = () => {
  const [userApiResponse, setUserApiResponse] = useState(null);

  const testAPI = "https://jsonplaceholder.typicode.com/users";

  // Call the useAPIFetch hook outside of useEffect
  const apiResponse = useAPIFetch({ apiUrl: testAPI });

  useEffect(() => {
    setUserApiResponse(apiResponse);
  }, [apiResponse]);

  return (
    <>
      <Hero />
      <Categories />
      {JSON.stringify(userApiResponse)}
    </>
  );
};

export default HomePage;

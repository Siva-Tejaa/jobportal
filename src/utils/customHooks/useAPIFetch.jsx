import React, { useState, useEffect, useContext } from "react";

import { Context } from "../Context";

const useAPIFetch = (url, authToken) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { logOutHandler } = useContext(Context);

  const fetchAPi = async () => {
    try {
      const headers = {};
      if (authToken) {
        headers["Authorization"] = `Bearer ${authToken}`;
      }
      const response = await fetch(url, { headers });
      const jsonData = await response.json();
      if (jsonData?.error?.message == "invalid token") {
        logOutHandler();
      }
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPi();

    // Cleanup function to cancel fetch request if component unmounts
    return () => {
      // Cleanup code if needed
    };
  }, [url]);

  return { loading, data, error };
};

export default useAPIFetch;

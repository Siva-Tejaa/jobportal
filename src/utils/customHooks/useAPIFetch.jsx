import React, { useState, useEffect } from "react";

const useAPIFetch = (url, authToken) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAPi = async () => {
    try {
      const headers = {};
      if (authToken) {
        headers["Authorization"] = `Bearer ${authToken}`;
      }
      const response = await fetch(url, { headers });
      const jsonData = await response.json();
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

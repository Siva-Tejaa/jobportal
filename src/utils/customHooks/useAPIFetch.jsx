import React, { useState, useEffect } from "react";

const useAPIFetch = ({ apiUrl }) => {
  const [apiResponse, setAPIResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState(null);

  const fetchAPi = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setAPIResponse(jsonData);
      setLoading(false);
    } catch (error) {
      setAPIError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPi();
  }, []);

  return { loading, apiResponse, apiError };
};

export default useAPIFetch;

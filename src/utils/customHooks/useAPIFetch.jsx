import React, { useState, useEffect } from "react";

const useAPIFetch = ({ apiUrl }) => {
  const [apiResponse, setAPIResponse] = useState(null);

  const fetchAPi = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setAPIResponse(jsonData);
    } catch (error) {
      setAPIResponse(error);
    }
  };

  useEffect(() => {
    fetchAPi();
  }, []);

  return apiResponse;
};

export default useAPIFetch;

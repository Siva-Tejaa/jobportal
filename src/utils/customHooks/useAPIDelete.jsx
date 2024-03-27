import React, { useState } from "react";

const useAPIDelete = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteJob = async (url, jobId, authToken) => {
    setLoading(true);

    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      };

      const res = await fetch(url, options);
      const jsonData = await res.json();
      if (
        jsonData?.error?.message == "invalid token" ||
        jsonData?.success == false
      ) {
        logOutHandler();
      }
      setResponse(jsonData);
      return jsonData;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, error, deleteJob };
};

export default useAPIDelete;

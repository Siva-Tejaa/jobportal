import React, { useState, useEffect } from "react";

const useAPIPost = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, formData, authToken) => {
    setLoading(true);

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(formData),
      };

      const res = await fetch(url, options);
      const jsonData = await res.json();
      setResponse(jsonData);

      if (jsonData?.success == true) {
        // setResponse(jsonData);
        return jsonData;
      } else {
        // setError(jsonData);
        return jsonData;
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, error, postData };
};

export default useAPIPost;

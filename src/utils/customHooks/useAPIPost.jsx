import React, { useState, useEffect } from "react";

const useAPIPost = () => {
  const [apiResponse, setAPIResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState(null);

  const postAPI = async ({ URL, postData, AuthToken }) => {
    setLoading(true);
    try {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${AuthToken}`,
        },
        body: JSON.stringify(postData),
      };

      const response = await fetch(URL, options);
      const jsonData = await response.json();
      setAPIResponse(jsonData);
      console.log(jsonData);
      console.log(apiResponse);

      setLoading(false);
    } catch (error) {
      setAPIError(error);
      setLoading(false);
    }
  };

  return { loading, apiResponse, apiError, postAPI };
};

export default useAPIPost;

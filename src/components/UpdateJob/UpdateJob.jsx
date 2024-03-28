import React from "react";

import { useParams, useLocation } from "react-router-dom";

const UpdateJob = () => {
  const { jobid } = useParams();
  const { state } = useLocation();
  {
    console.log(state?.jobData);
  }
  //   const job = stat?.job;
  return (
    <div>
      <p>Update Job Component</p>
      <p>{jobid}</p>
      <p>
        {state?.jobData ? JSON.stringify(state?.jobData) : "No job data found"}
      </p>
    </div>
  );
};

export default UpdateJob;

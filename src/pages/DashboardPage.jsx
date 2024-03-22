import React from "react";
import Header from "../components/Header/Header";

import { USER_JOBS } from "../utils/api/JobsApi";
import useAPIFetch from "../utils/customHooks/useAPIFetch";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import nojobs from "../assets/nojobs.png";

import { Link } from "react-router-dom";

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

const DashboardPage = () => {
  const url = USER_JOBS;
  const authToken = localStorage.getItem("jwtToken");

  const { loading, data, error } = useAPIFetch(url, authToken);

  //CSS Classes for Work Type
  const workTypeClasses = {
    Internship: "bg-lime-400 p-2 rounded-md",
    "Full-Time": "bg-orange-400 p-2 rounded-md",
    "Part-Time": "bg-red-500 p-2 rounded-md",
    Contract: "bg-blue-700 p-2 rounded-md",
  };

  return (
    <div>
      <Header />
      <p>User dashboard Page - Only Authenticated Users can access it</p>
      <div className="flex items-center justify-center">
        {loading && <p className="font-bold">Loading Jobs...</p>}
        {error && <p>Error: Something Went Wrong. Please Try Again</p>}
        {data?.data?.job?.length < 1 ? (
          <div className="flex flex-col items-center justify-center gap-8">
            <img src={nojobs} />
            <p>You haven't posted any jobs</p>
            <Link to="/postjob">
              <button className="text-sm font-semibold leading-6 bg-[#1A75E8] text-white px-4 py-2 rounded-md hover:bg-[#5e9be5]">
                Post Job
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
        {!loading && !error && data?.data?.job?.length > 0 && (
          <div className="flex flex-col gap-4">
            {data?.data?.job?.slice(0, 10)?.map((job) => (
              <div className="p-6 flex items-center justify-between border-2 gap-6 rounded-md">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{job?.position}</p>
                  <p className="text-sm">{job?.company}</p>
                </div>
                <div className={workTypeClasses[job?.workType]}>
                  {job?.workType}
                </div>
                <div>{dayjs(job?.updatedAt).fromNow()}</div>
              </div>
            ))}

            <Link to="/postjob">
              <button className="text-sm font-semibold leading-6 bg-[#1A75E8] text-white px-4 py-2 rounded-md hover:bg-[#5e9be5]">
                Post Job
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;

import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { ALL_JOBS } from "../../utils/api/JobsApi";
import useAPIFetch from "../../utils/customHooks/useAPIFetch";

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

const LatestJobs = () => {
  //CSS Classes for Work Type
  const workTypeClasses = {
    Internship: "bg-lime-400 p-2 rounded-md",
    "Full-Time": "bg-orange-400 p-2 rounded-md",
    "Part-Time": "bg-red-500 p-2 rounded-md",
    Contract: "bg-blue-700 p-2 rounded-md",
  };

  const url = ALL_JOBS + "?sort=latest";

  const { loading, data, error } = useAPIFetch(url);
  return (
    <div className="flex items-center justify-center">
      {loading && <p className="font-bold">Loading Jobs...</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
      {!loading && !error && (
        <div className="flex flex-col gap-4">
          {data?.data?.job?.slice(0, 20)?.map((job) => (
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
        </div>
      )}
    </div>
  );
};

export default LatestJobs;

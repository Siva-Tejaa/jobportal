import React, { useState } from "react";
import { CREATE_JOB } from "../../utils/api/JobsApi";
import useAPIPost from "../../utils/customHooks/useAPIPost";

import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const initialValues = {
    companyName: "",
    companyWebsite: "",
    companyLogo: "",
    jobTitle: "",
    jobDescription: "",
    jobCategory: "",
    jobType: "",
    jobLocation: "",
    experienceLevel: "",
    salaryRange: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const {
    companyName,
    companyWebsite,
    companyLogo,
    jobTitle,
    jobDescription,
    jobCategory,
    jobType,
    jobLocation,
    experienceLevel,
    salaryRange,
  } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { loading, response, error, postData } = useAPIPost();

  const postJobSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);

    const url = CREATE_JOB;
    const authToken = localStorage.getItem("jwtToken");

    const res = await postData(
      url,
      {
        company: companyName,
        position: jobTitle,
        status: "Interview",
        workType: jobType,
        workLocation: "jobLocation",
      },
      authToken
    );

    if (res?.success == true) {
      // console.log(res);
      alert(res?.message);
      navigate("/dashboard");
    } else {
      alert(`Something Went Wrong...Please Try Again.. ${res?.message}`);
      console.log(res);
    }
  };

  return (
    <div className="m-6 flex flex-col items-center justify-center gap-4">
      <p className="font-bold text-2xl">Post a Job</p>
      <form
        onSubmit={postJobSubmitHandler}
        className="flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 rounded-md"
      >
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">About Company</p>
          <div className="flex gap-2">
            <label className="flex flex-col gap-1">
              Name of Company*
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={changeHandler}
                required
                className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
              />
            </label>
            <label className="flex flex-col gap-1">
              Website
              <input
                type="url"
                name="companyWebsite"
                value={companyWebsite}
                onChange={changeHandler}
                className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
              />
            </label>
            <label className="flex flex-col gap-1">
              Logo
              <input
                type="file"
                name="companyLogo"
                value={companyLogo}
                onChange={changeHandler}
                className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-around gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Job Title*</p>
              <input
                type="text"
                name="jobTitle"
                value={jobTitle}
                onChange={changeHandler}
                className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Job Category</p>
              <input
                type="text"
                name="jobCategory"
                value={jobCategory}
                onChange={changeHandler}
                className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Job Type*</p>
              <div className="flex items-center gap-4">
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="jobType"
                    value="Full-Time"
                    selected
                    onChange={changeHandler}
                    className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
                  />{" "}
                  Full-Time
                </label>
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="jobType"
                    value="Part-Time"
                    onChange={changeHandler}
                    className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
                  />{" "}
                  Part Time
                </label>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="jobType"
                    value="Internship"
                    onChange={changeHandler}
                    className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
                  />{" "}
                  Internship
                </label>
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="jobType"
                    value="Contract"
                    onChange={changeHandler}
                    className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
                  />{" "}
                  Contract
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Location*</p>
              <select
                name="jobLocation"
                value={jobLocation}
                onChange={changeHandler}
                required
                className="border-[1px] p-2 rounded-sm focus:outline-[#1A75E8]"
              >
                <option value="" selected disabled>
                  Select City
                </option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Kochi">Kochi</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Noida">Noida</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Indore">Indore</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Mysore">Mysore</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Visakhapatnam">Visakhapatnam(Vizag)</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Job Description</p>
              <textarea
                rows="4"
                name="jobDescription"
                value={jobDescription}
                onChange={changeHandler}
                className="resize-none border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Experience Level</p>
              <div className="flex items-center gap-4">
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="experienceLevel"
                    value="freshers"
                    selected
                    onChange={changeHandler}
                    className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
                  />{" "}
                  Freshers
                </label>
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="experienceLevel"
                    value="1-2 years"
                    onChange={changeHandler}
                    className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
                  />{" "}
                  1-2 years
                </label>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="experienceLevel"
                    value="3-5 years"
                    onChange={changeHandler}
                    className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
                  />{" "}
                  3-5 years
                </label>
                <label className="flex gap-1">
                  <input
                    type="radio"
                    name="experienceLevel"
                    value="6+ years"
                    onChange={changeHandler}
                    className="border-[1px] p-1 rounded-sm focus:outline-[#1A75E8]"
                  />{" "}
                  6+ years
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Salary Range</p>
              <select
                name="salaryRange"
                value={salaryRange}
                onChange={changeHandler}
                className="border-[1px] p-2 rounded-sm focus:outline-[#1A75E8]"
              >
                <option value="" selected disabled>
                  Select Salary Range Per Annum
                </option>
                <option value="Less than 3 lakhs">
                  "Less than 3 lakhs per annum"
                </option>
                <option value="3 - 5 lakhs">3 - 5 lakhs per annum</option>
                <option value="5 - 7 lakhs">5 - 7 lakhs per annum</option>
                <option value="7 - 10 lakhs">7 - 10 lakhs per annum</option>
                <option value="10 - 15 lakhs">10 - 15 lakhs per annum</option>
                <option value="15 - 20 lakhs">15 - 20 lakhs per annum</option>
                <option value="20 - 30 lakhs">20 - 30 lakhs per annum</option>
                <option value="30 - 50 lakhs">30 - 50 lakhs per annum</option>
                <option value="More than 50 lakhs">
                  More than 50 lakhs per annum
                </option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={
            loading
              ? "p-1 bg-[#b8cfec] text-white w-[100%] cursor-not-allowed"
              : "p-1 bg-[#1A75E8] text-white w-[100%]"
          }
        >
          {loading ? "Posting Job..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};

export default PostJob;

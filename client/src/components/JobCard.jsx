import React from "react";
import { assets } from "../assets/assets";
import {useNavigate} from "react-router-dom";

const JobCard = ({ job }) => {


  const navigate=useNavigate();

  return (
    <div className='border p-6 shadow rounded bg-[#edefef]  transition-all duration-300 ease-in-out  hover:scale-105 
    hover:shadow-xl 
    hover:bg-blue-100 
    hover:border-blue-400'>
      <div className="flex justify-between items-center">
        <img className="h-8" src={job.companyId.image} alt="" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 mt-3 text-xs">
        <span className="bg-gradient-to-r from-[#870404] to-[#DD553A] text-white border-blue-200 px-4 py-2.5 rounded">{job.location}</span>
        <span className="bg-gradient-to-r from-[#000000] to-[#666666] text-white border-red-200 px-4 py-2.5 rounded">{job.level}</span>
      </div>
      <p className="text-gray-500 text-sm mt-4" dangerouslySetInnerHTML={{ __html: job.description.slice(0,150) }}></p>
      <div className="mt-4 flex gap-4 text-sm">
        <button onClick={ ()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="bg-blue-950 text-white px-4 py-2 rounded ">Apply Now</button>
        <button onClick={ ()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="bg-white text-gray-700 border border-gray-500 rounded px-4 py-2">Learn More</button>
      </div>
    </div>
  );
};

export default JobCard;

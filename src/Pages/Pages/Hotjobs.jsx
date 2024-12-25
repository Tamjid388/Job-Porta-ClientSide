import { div } from 'motion/react-client'
import React, { useEffect, useState } from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Hotjobs = () => {
    const [jobs,setjobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setjobs(data))
    },[])
  return (
    <div>
      <h1 className='text-4xl font-bold text-primary my-9 text-center'>New Jobs</h1>
        <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-8 mx-2 my-16'>
            {
                jobs.map(job=><Hotjobcard key={job._id} job={job}>

                </Hotjobcard>)
            }
        </div>
    </div>
  )
}
const Hotjobcard=({job})=>{
    const {title,location,jobType,category,applicationDeadline,salaryRange,description
      ,company,requirements,responsibilities,hr_email,hr_name,company_logo ,_id 
    }=job
    return(
        <div>
 <div className="card card-compact bg-base-100  shadow-xl">
<div className='flex items-center gap-2 m-2'>
<figure>
    <img className='w-12'
      src={company_logo}
      alt="company_logo" />
  </figure>
  <div>
    <h4 className="text-2xl font-medium text-primary">{company}</h4>
    <div className='flex items-center gap-1'>
   
   <FaLocationDot></FaLocationDot>
   <p>{location}</p>
    </div>
  </div>
</div>
  <div className="card-body flex flex-col justify-between min-h-[266px]">
    <h2 className="card-title">{title}
        <div className='badge badge-secondary'>New</div>
    </h2>
    <p className=''>{description}</p>
    <div className='flex gap-1 flex-wrap '>
        {
             requirements && requirements.map((require,idx)=><p key={idx} className='bg-gray-200 hover:bg-gray-300 hover:text-primary rounded-md p-1'>{require}</p>)
        }
    </div>
    <div className="card-actions flex justify-between items-center mt-4">
        <p><span className='font-semibold text-primary line-clamp-1'>Salary: </span >{salaryRange.min}-{salaryRange.max}
         <span className='font-medium opacity-65'> {salaryRange.currency}</span></p>

   <Link to={`/jobs/${_id}`}>  
    <button className="btn btn-primary">Apply Now</button></Link>
    </div>
  </div>
</div>

        </div>
    )
}
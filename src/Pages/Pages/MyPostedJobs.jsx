import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Context/AuthContext'
import { Link } from 'react-router-dom'

export const MyPostedJobs = () => {
    const [jobs,setJobs]=useState([])
    const {user}=useContext(AuthContext)
    console.log(user.email)
    useEffect(()=>{

        fetch(`http://localhost:5000/jobs?email=${user.email}`,

        )
        .then(res=>res.json())
        .then(data=>{setJobs(data)})
    }
   
    ,[user.email])
    console.log(jobs);
  return (
    <div>
        <h1 className="text-3xl font-bold">MyPostedJobs : {jobs.length}</h1>
        <div className="overflow-x-auto">
  <table className="table  border-collapse">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>View Applications</th>
        <th>Application Count</th>
      </tr>
    </thead>
    <tbody>
  

        {
            jobs.map((job,idx)=> <tr key={job.id}>
                <th>{idx+1}</th>

                <td>{job.hr_name}</td>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>
                
                    <Link to={`/viewApplication/${job._id}`}>
                    <button className="btn-link">
                        View Applications
                    </button></Link>
                </td>
                <td>{job.applicationcount}</td>
               
               
              </tr>)
        }
    
  
     
    </tbody>
  </table>
</div>
    </div>
  )
}

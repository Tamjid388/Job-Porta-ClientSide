import { div } from "motion/react-client"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../Context/AuthContext"
import image1 from '../../assets/resume.jpg'
import { IoMdRemoveCircle } from "react-icons/io";
import axios from "axios";



 const MyApplications=()=>{
    const {user}=useContext(AuthContext)
    const [jobs,setJobs]=useState([])
    useEffect(
        ()=>{
          // fetch(`http://localhost:5000/job-applicant?email=${user.email}`)
          //   .then(res=>res.json())
          //   .then(data=>{
              
          //       setJobs(data)
                
          //   })
            axios.get(`http://localhost:5000/job-applicant?email=${user.email}`,
              {withCredentials:true}
            )
            .then(response => {
              setJobs(response.data);
              console.log(response.data);
            })

        
        }
        ,[user.email]
    )
    return(
    <div>
        <figure className="h-[300px] ">
            <img className="py-6 h-full w-full object-cover "
             src={image1}  alt="img" />
        </figure>

        <h2 className="my-10 text-3xl font-bold text-center">My Applications:{jobs.length}</h2>
        <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>
          Select
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Application Status</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {/* row  */}
      {
        jobs.map(job=>  <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.title}</div>
                  <div className="text-sm opacity-50">{job.location}</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Applied</td>
            <th>
              <button title="Delete" className="btn btn-ghost btn-lg">
              <IoMdRemoveCircle />
              </button>
            </th>
          </tr>)
      }
     
   
 
    </tbody>

  </table>
</div>

</div>


    )

 }
 export default MyApplications
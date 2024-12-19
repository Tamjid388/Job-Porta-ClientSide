import { div } from "motion/react-client"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../Context/AuthContext"



 const MyApplications=()=>{
    const {user}=useContext(AuthContext)
    const [jobs,setJobs]=useState([])
    useEffect(
        ()=>{
            fetch(`http://localhost:5000/job-applicant?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
              
                setJobs(data)
                
            })
            .catch(error => console.error('Error fetching data:', error));  
        }
        ,[user.email]
    )
    return(
    <div>
        <h2 className="my-10 text-3xl font-bold text-center">My Applications:{jobs.length}</h2>

</div>


    )

 }
 export default MyApplications
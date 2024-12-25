import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ViewApplications = () => {
    const applcations=useLoaderData()
    const handleStatusUpdate=(e,id)=>{
console.log(e.target.value,id);
const data={
    status:e.target.value
}
fetch(`http://localhost:5000/job-application/${id}`,{
    method:'PATCH',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(data)
}
)
.then(res=>res.json())
.then(data=>{console.log(data)
    if(data. modifiedCount){
        Swal.fire({
            title: "Status Has Beed Updated",
            icon: "success",
            draggable: true
          });
    }
})
    }
  return (
    <div>
  <h2 className='text-3xl font-bold text-center my-10'>Applications For this Job:{applcations.length}</h2>
  <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Email</th>
        <th>Status</th>
        <th>Update Status</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        applcations.map((app,id)=>  <tr 
        key={id}
        className='hover:bg-base-200  '
        >
        <th>{id+1}</th>
        <td>{app.applicant_email}</td>
        <td></td>
        <td>
        <select 
        onChange={(e)=>handleStatusUpdate(e,app._id)}
        defaultValue={app.status || 'Change Status'}

        className="select select-bordered select-xs w-full max-w-xs">
  <option disabled >Change Status</option>
  <option>Under Review</option>
  <option>Set Interview</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
        </td>
        
      </tr>)
    }
    
    </tbody>
  </table>
</div>
    </div>
  )
}

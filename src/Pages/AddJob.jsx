import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../Context/AuthContext";

export const AddJob = () => {
  const navigate=useNavigate()
  const {user}=useContext(AuthContext)
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initalData = Object.fromEntries(formData.entries());
    const { min, max, cureency, ...newdata } = initalData;
    newdata.salaryRange = {min, max, cureency };
    newdata.requirements = newdata.requirements.split("\n");
    newdata.description = newdata.description.split("\n");
    console.log(newdata)

fetch(`http://localhost:5000/jobs`,{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(newdata)
})
.then(res=>res.json())
.then(data=>{
 if(data.insertedId){
  Swal.fire({
    title: "Job added successfully!",
    icon: "success",
    draggable: true
  });
  navigate('/MyPostedJobs')

 }
})
  
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-2 md:mx-auto my-16 ">
      <h1 className="text-3xl font-bold text-center mb-6">Post A New Job</h1>
      <form onSubmit={handleAddJob}>
        {/* Job Title */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter job title"
            className="input input-bordered w-full"
          />
        </div>

        {/* Location */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter job location"
            className="input input-bordered w-full"
          />
        </div>

        {/* Job Type */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Job Type</span>
          </label>
          <select name="jobType" className="select select-bordered w-full">
            <option value="" disabled >
              Select job type
            </option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="freelance">Freelance</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        {/* Job Fields */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Job Fields</span>
          </label>
          <select name="jobField" className="select select-bordered w-full">
            <option value="" disabled >
              Select job field
            </option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        {/* Salary Range */}
        <label className="label">
          <span className="label-text font-semibold">Salary Range</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="form-control mb-4">
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-4">
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-4">
            <select defaultValue={"Select"} name="currency" className="select select-bordered w-full">
              <option value="" disabled  className="">
                Select
              </option>
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Job Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter a detailed job description"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Company Name */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Enter Company Name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Requirements */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Requirements</span>
          </label>
          <textarea
          required
            name="requirements"
            placeholder="Put Each Requirements"
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* HR Name */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Enter HR's name"
            className="input input-bordered w-full"
          />
        </div>

        {/* HR Email */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">HR Email</span>
          </label>
          <input
          defaultValue={'ahmed15-4895@diu.edu.bd'}
            type="email"
            name="hr_email"
            placeholder="Enter HR's email"
            className="input input-bordered w-full"
          />
        </div>
        {/*applicationDeadline */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Deadline"
            className="input input-bordered w-full"
          />
        </div>

        {/* Company Logo URL */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Company Logo URL</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Enter the logo URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

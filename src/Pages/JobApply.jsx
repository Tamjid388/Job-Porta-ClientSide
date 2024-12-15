import React from 'react'
import { useParams } from 'react-router-dom'

export const JobApply = () => {
    const {id}=useParams()
    const submitJobapplycation=(e)=>{
        e.preventDefault()
        const form=e.target
        const LinkedIn=form.linkedinUrl.value
        const GitHub=form.githubUrl.value
        const Resume=form.resumeUrl.value
        const values={LinkedIn,GitHub,Resume}
        console.log(values);
    }
  
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card w-full max-w-lg bg-white shadow-md p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Job Application</h2>
        <form className="space-y-4" onSubmit={submitJobapplycation}>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>


             {/* LinkedIn URL */}
             <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn Profile URL</span>
            </label>
            <input
              type="url"
              name="linkedinUrl"
              placeholder="Enter your LinkedIn profile link"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* GitHub URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub Profile URL</span>
            </label>
            <input
              type="url"
              name="githubUrl"
              placeholder="Enter your GitHub profile link"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Resume URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume Link</span>
            </label>
            <input
              type="url"
              name="resumeUrl"
              placeholder="Provide a link to your resume (Google Drive, Dropbox, etc.)"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
              name="jobType"
              className="select select-bordered w-full"
              required
            >
              <option disabled selected>
                Select a job type
              </option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
            </select>
          </div>

          {/* Cover Letter */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Cover Letter</span>
            </label>
            <textarea
              name="coverLetter"
              className="textarea textarea-bordered w-full"
              placeholder="Tell us why you are a good fit for this role"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

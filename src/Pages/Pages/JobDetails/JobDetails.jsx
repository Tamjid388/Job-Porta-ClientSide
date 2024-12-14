import React from 'react'
import { useLoaderData } from 'react-router-dom'
import image0 from "../../../assets/team3.jpg"
import { PiToolbox } from 'react-icons/pi'

export const JobDetails = () => {
    const job=useLoaderData()
    const {title,location,jobType,category,applicationDeadline,salaryRange,description
        ,company,requirements,responsibilities,hr_email,hr_name,company_logo ,_id 
      }=job
  return (
    <div className='mx-2'>
<figure className='my-8 '>
<img className='h-[50vh] w-full rounded-2xl object-cover' src={image0} alt="" />
</figure>
<h1 className='text-4xl font-bold text-primary'>{title}</h1>
<div className='mt-2 font-semibold opacity-80 flex items-center gap-2'>
    <PiToolbox></PiToolbox>
<p>{jobType}</p> 
<p>Deadline: {applicationDeadline}</p>
</div>
<hr className='my-8' />
<h1 className='text-gray-500 text-3xl font-bold'>Welcome To {company}</h1>
<p className='text-gray-500 my-4'>{description}</p>
<h1 className='text-4xl font-bold text-gray-500 mt-8'>Essential Knowledge, Skills, and Experience</h1>
<ul class="list-disc ml-4 text-gray-500  my-8">
    <li>A proven portfolio showcasing innovative and user-centric design solutions across various projects.</li>
    <li>Strong understanding of user experience principles and design best practices.</li>
    <li>Experience with design tools like Figma, Photoshop, and Illustrator.</li>
</ul>
<button className='btn btn-primary'>Apply Now</button>


<hr className='my-20' />
    </div>
  )
}

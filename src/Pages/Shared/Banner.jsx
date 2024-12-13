
import { color, easeOut, motion } from "framer-motion";
import React from 'react'

export const Banner = () => {
  return (
    <div>
        <div className="hero bg-base-200 h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <figure>
   <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
   </figure>
    <div className='w-1/2'>
      <motion.h1 className="text-5xl font-bold"
      animate={{x:40}}
      transition={{duration:2,delay:2,ease:easeOut,repeat:Infinity}}
      >Find Your <motion.span
      animate={{color:['#33ffe9','#334cff']}}
      transition={{ duration: 3, repeat: Infinity}}
      >Dream</motion.span> Job!</motion.h1>

      <p className="py-6">
      Explore thousands of job opportunities across various industries. Create your profile, apply effortlessly,
       and take the next step in your career journey.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    
  </div>
</div>
    </div>
  )
}

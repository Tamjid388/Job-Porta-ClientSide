
import { color, easeOut, motion } from "framer-motion";
import team1 from "../../assets/team4.jpg"

export const Banner = () => {
  return (
    <div>
        <div className="hero bg-base-200 h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <figure>
   <motion.img
   animate={{y:[0, 30, 0]}}
   transition={{duration:4,ease: "easeInOut",repeat:Infinity}}
src={team1}
className="max-w-sm rounded-[40px] border-l-4 border-b-4 border-blue-700 rounded-bl-none shadow-2xl" />
   </figure>
    <div className='w-1/2'>
      <motion.h1 className="text-5xl font-bold hidden md:block"
      animate={{x:40}}
      transition={{duration:2,delay:2,ease:easeOut,repeat:Infinity}}
      >Find Your <motion.span
      animate={{color:['#33ffe9','#334cff']}}
      transition={{ duration: 5, repeat: Infinity}}
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

import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Social from '../Shared/social';

export const Signin = () => {
    const {signin}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
   
    const from=location.state || '/'
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form =e.target
        const name=form.name.value
        const email=form.email.value;
        const password=form.password.value;
        signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // setUser(user);
            const User={email:email}
           
            axios.post('https://job-portal-server-three-ashen.vercel.app/jwt',User,{withCredentials:true})
            .then(res=>console.log(res.data))




            navigate(from)
         
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        

    }
  return (
    <div className='flex  flex-col justify-center items-center md:h-screen'>
   <h1 className='text-5xl py-10 font-extrabold'>Login</h1>
    <div className="w-full max-w-lg shadow-lg p-4 bg-base-200 rounded-lg">
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
      {/* Google */}
      <Social></Social>
    </div>

    <div className='p-14'>
      
    </div>
  </div>
  )
}

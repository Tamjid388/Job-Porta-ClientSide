import React, { useContext } from 'react'
import regANime from "../../assets/lottie/register_ANimation.json"
import Lottie from 'lottie-react'
import AuthContext from '../../Context/AuthContext'
import Social from '../Shared/social'
import { Navigate } from 'react-router-dom'

export const Register = () => {
  const {createUser}=useContext(AuthContext)
    function handleSubmit(e){
e.preventDefault();
const form =e.target
const name=form.name.value
const email=form.email.value;
const password=form.password.value;
// pass validation
const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

createUser(email,password)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  console.log(user);

  
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
  // ..
});

    }
  return (
    <div className='flex md:flex-row flex-col-reverse justify-center items-center  md:h-screen'>
     
        <div className="w-full     max-w-lg  shadow-lg p-4 bg-base-200 rounded-lg">
            
        <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              name='name'
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                  name='email'
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
                  name='password'
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>

        
        

            {/* Submit Button */}
            <div className="form-control mt-6 ">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>

            
          </form>
       
              <Social></Social>
            
        </div>
    
      <div className='p-14'>
            <Lottie animationData={regANime}></Lottie>
          </div>

    </div>
  )
}

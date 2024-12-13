import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthContext';

export const Signin = () => {
    const {signin}=useContext(AuthContext)
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
            setUser(user);
            console.log(user);
            // ...
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
    </div>

    <div className='p-14'>
      
    </div>
  </div>
  )
}

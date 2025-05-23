import { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom'
import { CgClose } from "react-icons/cg";
import AuthContext from "../../Context/AuthContext";
import '../../Pages/Shared/navlink.css';




export const Navbar = () => {
  const [open,setOpen]=useState(false)
  const {user,signoutuser}=useContext(AuthContext)
  const handlesignout=()=>{
    signoutuser()
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
    }).catch((error) => {
      // An error happened.
    });
  }
    // const links=< >
    // <NavLink to={"/" } className="text-xl font-medium text-primary">Home</NavLink>
    // <NavLink to={"/myapplications" } className="md:mx-2 text-xl font-medium text-primary">My Applications</NavLink>
    // <NavLink to={"/addjob" } className="md:mx-2 text-xl font-medium text-primary">Add Job</NavLink>
     
    // </>
    const links=< >
<li><NavLink to={"/" } className=" font-medium text-primary">Home</NavLink></li>
<li>
<NavLink to={"/myapplications" } className="  font-medium text-primary">My Applications</NavLink>

</li>
<li>
<NavLink to={"/addjob" } className="  font-medium text-primary">Add Job</NavLink>
</li>
<li>
<NavLink to={"/mypostedjobs" } className="  font-medium text-primary">My Posted Jobs</NavLink>
</li>
    
     
    </>
  return (
    <nav>
    <div className="flex items-center "
    >
      <div className="navbar  ">
    <div className="navbar-start">
      {/* <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {links}

        </ul>
      </div> */}

<div className="md:hidden shadow-xl" onClick={()=>setOpen(!open)}>
  {
    open? <CgClose className=" bg-base-200 text-2xl " />:
    <IoMdMenu className=" bg-base-200 text-2xl "/>
  }

</div>

      <a className="btn btn-ghost text-xl">Job Portal</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {links}
      </ul>
    </div>
    <div className="navbar-end space-x-2">
      {
        user?
        <button onClick={handlesignout} className="btn btn-primary font-medium">Sign Out</button>
        :
        <>
           <Link className="btn btn-outline mr-2 hover:bg-primary" to={"/register"}>Register</Link>
           <Link to={"/signin"} className="btn btn-primary">Sign In</Link>
        </>
      }
     
    </div>
  </div>
  
  
  </div>
  <div className={`md:hidden flex flex-col relative rounded-md  w-1/2 duration-1000
    ${open?'left-0 p-4  mt-2 m-2 bg-base-200':'-left-20'}
    `}>
    {links}
  </div>
  </nav>
  )
}

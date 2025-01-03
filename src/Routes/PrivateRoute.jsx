import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
import { Loader } from '../Pages/Shared/Loader'

export const PrivateRoute = ({children}) => {
 const {user,loading}  = useContext(AuthContext)
 const location =useLocation()
 console.log(location);
 if(loading){
  return <Loader></Loader>
 }
 if(user){
  return children
 }
  return  <Navigate to={"/signin"} state={location.pathname}></Navigate>
}

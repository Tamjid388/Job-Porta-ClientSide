import axios from "axios"
import { useContext, useEffect } from "react"
import AuthContext from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"



const axiosInstance=axios.create({
    baseURL:'https://job-portal-server-three-ashen.vercel.app',
    withCredentials:true
})


export const useAxiosSecure = () => {
const {signoutuser}=useContext(AuthContext)
const navigate=useNavigate()


useEffect(()=>{
  axiosInstance.interceptors.response.use(response=>{
return response
  },
error=>{
  if(error.status===401 || error.status ==403)
    
    signoutuser()

   .then(()=>{
    navigate('/signin')
  })
  .catch((err)=>
    {console.log(err)}
)
  return Promise.reject(error)
}
)
}
,[])



  return axiosInstance
}

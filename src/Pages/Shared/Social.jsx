import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

export const Social = () => {
    const {loginwithGoogle}=useContext(AuthContext)
    let navigate=useNavigate()
    const handlegoogleLogin=()=>{
        loginwithGoogle()
        .then(res=>{
            console.log(res.user)
            navigate("/")
        })
        .catch(error=>{
            console.log(error.massage);
        })
        

    }
  return (
    <div>
        <button className='' onClick={handlegoogleLogin}>Login With Google</button>
    </div>
  )
}
export default Social
import React, { useState } from 'react'
import AuthContext from './AuthContext'
import { auth } from '../Firebase/firebase.config.init'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        
        user,setUser,loading,createUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  )
}

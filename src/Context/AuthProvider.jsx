import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { auth } from '../Firebase/firebase.config.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user);
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }
const signin=(email,password)=>{
  setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
}

    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
      })
      return ()=>{
        unsubscribe();
      }
    },[])


    const authInfo={
        
        user,setUser,loading,createUser,signin
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  )
}

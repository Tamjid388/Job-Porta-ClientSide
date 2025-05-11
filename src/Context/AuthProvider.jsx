import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { auth } from '../Firebase/firebase.config.init'
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import axios from 'axios'

export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    // console.log(user);
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const createUser=(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }
const signin=(email,password)=>{
  setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
}
const signoutuser=()=>{
  setLoading(true)
  return signOut(auth)
}
const loginwithGoogle=()=>{
  setLoading(true)
  return signInWithPopup(auth,provider)
}

    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
       
        if(currentUser?.email){
          const User={email:currentUser.email}
          axios.post('https://job-portal-server-three-ashen.vercel.app/jwt',User,{withCredentials:true})
          .then(res=>{console.log(res.data)
            setLoading(false)
          })
          .catch(err => console.error(err));
        }else{
          axios.post('https://job-portal-server-three-ashen.vercel.app/logout',{},{withCredentials:true})
          .then(res=>{
         
            setLoading(false)
          }

          )
        }


       
      })
      return ()=>{
        unsubscribe();
      }
    },[])


    const authInfo={
        
        user,setUser,loading,createUser,signin,signoutuser,loginwithGoogle
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  )
}

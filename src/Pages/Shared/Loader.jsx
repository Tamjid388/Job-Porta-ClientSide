import Lottie from 'lottie-react'
import React from 'react'
import lottie from "../../assets/lottie/Animation -Loader.json"

export const Loader = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>

<Lottie animationData={lottie}></Lottie>
    </div>
  )
}

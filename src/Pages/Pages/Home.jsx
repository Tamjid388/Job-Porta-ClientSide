import React from 'react'
import { Banner } from '../Shared/Banner'
import { Hotjobs } from './Hotjobs'

export const Home = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-10'>Home Page</h1>
      <Banner></Banner>
      <Hotjobs></Hotjobs>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to={"/"}>
        <h1 className='uppercase text-red-500 font-bold text-4xl cursor-pointer'>netflix</h1>
      </Link>
        
        <div>
            <Link to="/signin"><button className='text-white pr-4 cursor-pointer hover:scale-105 duration-200'>Log In</button></Link>
            <Link to="/signout"><button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:scale-105 duration-200'>Log Out</button></Link>
        </div>
    </div>
  )
}

export default Navbar
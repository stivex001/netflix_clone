import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {userAuth} from "../context/AuthContext"

const SignOut = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {user, signUp} = userAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <div className='w-full h-full'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/2aeb0b23-006c-4eb6-9997-51ecbbe9e16e/NG-en-20220912-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-black/60 top-0 left-0 w-full h-screen fixed'></div>
        <div className='w-full fixed px-4 py-24 '>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <p className='text-3xl font-bold'>Sign Up</p>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-none' type="email" placeholder='Email' autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-none' type="password" placeholder='Password' autoComplete='current-password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'><span className='text-gray-600'>Already Subscribed to Netflix?</span><Link to="/signin">Sign In</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignOut
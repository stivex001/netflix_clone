import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
        <div className='w-full h-full'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/2aeb0b23-006c-4eb6-9997-51ecbbe9e16e/NG-en-20220912-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-black/60 top-0 left-0 w-full h-screen fixed'></div>
        <div className='w-full fixed px-4 py-24 '>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <p className='text-3xl font-bold'>Sign In</p>
              <form className='w-full flex flex-col py-4'>
                <input className='p-3 my-2 bg-gray-700 rounded outline-none' type="email" placeholder='Email' autoComplete='email' />
                <input className='p-3 my-2 bg-gray-700 rounded outline-none' type="password" placeholder='Password' autoComplete='current-password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'><span className='text-gray-600'>New to Netflix?</span><Link to="/signup">Sign Up</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
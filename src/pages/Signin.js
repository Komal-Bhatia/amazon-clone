import React, { useState } from 'react'
import { amazonLogoBlack } from '../assets/images/index'
import { Link } from 'react-router-dom'

const Signin = () => {

  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errPsw, setErrPsw] = useState("");

  const handleEmail =(e)=>{
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword = (e)=>{
    setPsw(e.target.value)
    setErrPsw("")
  }

  
  // After click on continue button
  const handleLogin =(e)=>{
    e.preventDefault();
    if(!email){
      setErrEmail("Please Enter a valid email address")
    }

    if(!psw){
      setErrPsw("Enter your Password")
    }
  }

  if(email && psw){
    setEmail("");
    setEmail("");
  }

  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[350px] mx-auto flex flex-col items-center'>
            <img className="w-32 pb-10" src={amazonLogoBlack} alt="amazon logo" />
            <div className='w-full border border-zinc-200 p-6'>
              <h2 className='font-titleFont font-medium text-3xl mb-4'>Sign in</h2>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Email</p>
                  <input 
                  onChange={handleEmail} 
                  value={email}
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base tounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
                  type="email" />
                  {
                    errEmail && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide flex-items-center gap-2 -mt-1.5'>
                            <span className='italic font-titleFont font-extrabold text-base pr-3'>!</span>{errEmail}</p>
                    )
                  }
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Password</p>
                  <input  
                  onChange={handlePassword} 
                  value={psw}
                  className='w-full py-1 border border-zinc-400 px-2 text-base tounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
                  type="password" />
                  {
                    errPsw && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide flex-items-center gap-2 -mt-1.5'>
                            <span className='italic font-titleFont font-extrabold text-base pr-3'>!</span>{errPsw}</p>
                    )
                  }
                </div>
                <button onClick={handleLogin} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                  Continue
                </button>
            </div>
            <p className='text-xs text-black leading-4 mt-4'>By Continuing, you agree to Amazon's <span className='text-blue-600 mb-4'>Contidions of Use</span> and <span className='text-blue-600'>Privacy Notice.</span></p>
            </div>
            <p className='w-full text-xs text-gray-600 mt-4 flex items-center'>
              <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
              <span className='w-1/3 text-center text-blue-600'>New To Amazon?</span>
              <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
            </p>
           <Link className="w-full" to="/register">
              <button className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput mt-3'>
                  Create your Amazon account
              </button>
           </Link>
        </form>
      </div>
      <div className='w-full bg-gradient-to-t from-white  via-white to-zinc-200 flex flex-col gap-4  justify-center items-center py-10'>
        <div className='flex items-center gap-6'>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline undeline-offset-1 cursor-pointer duration-100'>Conditions of Use</p>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline undeline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline undeline-offset-1 cursor-pointer duration-100'>Help</p>
        </div>
        <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default Signin

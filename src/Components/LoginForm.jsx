import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'; 
const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate()
  const [formData,setFormData] = useState({email:"",pass:""});
  const [showPassword,setShowPassword] = useState(false)
  function changeHandler(e){
    setFormData((prevFormData)=>{
           return {
            ...prevFormData,
            [e.target.name]: e.target.value
           }
    })
  }
  function submitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In!")
    navigate("/dashboard")
  }
  return (
   <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>
    <label htmlFor="Email" className='w-full' ><p className='text-richblack-5 mb-1 
    leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p></label>
    <input 
    className='bg-richblack-800 text-white w-full rounded-[0.5rem] border-b-[1px] border-bg-slate-100 p-[12px]' 
    type="text" name="email" value={formData.email} onChange={changeHandler} required id="Email" placeholder='Enter email address' />
    <label htmlFor="passwordField"><p className='text-richblack-5 mb-1 
    leading-[1.375rem] relative'>Password <sup className='text-pink-200'>*</sup></p>
    <input 
     className='bg-richblack-800 w-full text-white rounded-[0.5rem] border-b-[1px] border-bg-slate-100 p-[12px]' 
    type={showPassword ? ("text") : ("password")} name="pass" id="passwordField" placeholder='Enter your password..' value={formData.pass} onChange={changeHandler} />
      <span
       className='absolute  top-[362px] left-[605px] cursor-pointer'
      onClick={() => setShowPassword((prev) => !prev)}>
               {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
      </span>
       <Link to="#"><p className='text-xs max-w-max mt-2 ml-auto text-blue-100'>Forgot Password</p></Link>
    </label>
  <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6 ' >
    Sign in
  </button>
   </form>
  )
}

export default LoginForm
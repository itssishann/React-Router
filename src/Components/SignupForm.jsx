// Import React, useState, and the icons
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType,setAccountType] = useState("student")
  const navigate = useNavigate();
  function changeHandler(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      };
    });
  }
  function submitHandler(event){
    event.preventDefault()
    if(formData.pass != formData.confirmPass){
      toast.error("Password Not Match!");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created")
    navigate("/dashboard")
    
  }

  return (
    <div>
      {/* Student and instructor button tab */}
      <div className='flex gap-x-1 my-[0.85rem] p-1 rounded-full bg-richblack-800 max-w-max'>
        <button 
       className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={()=>(setAccountType("student"))}>Student</button>
        <button 
         className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>(setAccountType("instructor"))}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/* Other form fields ... */}
        <div className='flex justify-between mt-4'>
        <label htmlFor="" className='mt-2' >
          <p className='text-richblack-5 mb-1 
    leading-[1.375rem]'>First Name<sup className='text-pink-200' >*</sup></p>
          <input
          className='bg-richblack-800 text-white w-full rounded-[0.5rem] border-b-[1px] border-bg-slate-100 p-[12px]' 
          type="text"
            required
            name='firstName'
            onChange={changeHandler}
            placeholder='Enter First Name..'
            value={formData.firstName}
          />
        </label>
        <label htmlFor="">
          <p className='text-richblack-5 mb-1 
    leading-[1.375rem]'>Last Name<sup className='text-pink-200' >*</sup></p>
          <input
            type="text"
            className='bg-richblack-800 text-white w-full rounded-[0.5rem] border-b-[1px] border-bg-slate-100 p-[12px]' 
            name='lastName'
            onChange={changeHandler}
            placeholder='Enter Last Name..'
            value={formData.lastName}
          />
        </label>
        </div>
      <div className='mt-4'>
      <label htmlFor="">
          <p className='text-richblack-5 mb-1 
    leading-[1.375rem]'>Email Address<sup className='text-pink-200' >*</sup></p>
          <input
            type="email"
            className='bg-richblack-800 text-white w-full rounded-[0.5rem] border-b-[1px] border-bg-slate-100 p-[12px]' 
            required
            name='email'
            onChange={changeHandler}
            placeholder='Enter Email..'
            value={formData.email}
          />
        </label>
      </div>
        <div className='flex justify-between mt-4'> 
        <label htmlFor="" className='relative' >
          <p className='text-richblack-5 mb-1 
    leading-[1.375rem]'>Create Password<sup className='text-pink-200' >*</sup></p>
          <input
          type={showPassword ? "text" : "password"} 
            required
            className='bg-richblack-800 text-white w-full rounded-[0.5rem] border-b-[1px] border-bg-slate-100 p-[12px]' 
            name='pass'
            onChange={changeHandler}
            placeholder='Enter Password..'
            value={formData.pass}
          />
          <span
             className='absolute right-3 top-[40px] cursor-pointer'
          onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
          </span>
        </label>
        <label className='relative' htmlFor="">
          <p className='text-richblack-5 mb-1 
    leading-[1.375rem]'>Confirm Password<sup className='text-pink-200' >*</sup></p>
          <input
            type={showPassword2 ? "text" : "password"}
            required
            className='bg-richblack-800 w-full rounded-[0.5rem] text-white border-b-[1px] border-bg-slate-100 p-[12px]' 
            name='confirmPass'
            onChange={changeHandler}
            placeholder='Enter Confirm Password..'
            value={formData.confirmPass}
          />
          <span 
          className='absolute right-3 top-[40px] cursor-pointer'
          onClick={() => setShowPassword2(prev => !prev)}>
            {showPassword2 ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
          </span>
        </label>
        </div>
        <button  className='w-full bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6 '>Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;

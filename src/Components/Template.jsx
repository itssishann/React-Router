import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import imageFrame from '../assets/frame.png';
import {FcGoogle} from "react-icons/fc"

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className='flex w-11/12 justify-between max-w-[1160px] py-5 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px]'>
        <h2 className='text-richblack-5 font-semibold text-[1.875rem] leading-9 '>{title}</h2>
        <p className='text-[1.125rem] leading-6 mt-4'>
          <span className='text-richblack-100'>{desc1}</span>
          <br />
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>
        {formType === 'signup' ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='h-[1px] w-full bg-slate-700'></div>
          <p className='text-richblack-700 font-medium leading-5'>OR</p>
          <div className='h-[1px] w-full bg-slate-700'></div>
        </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
          <FcGoogle/>
          <p>Sign in with Google</p>
        </button>
      </div>
      <div className='relative w-11-12 top-4 max-w-[450px]'>
        <img className='' src={imageFrame} alt="PatternImage" width={558} height={504} loading="lazy" />
        <img className='absolute -top-4 right-4 z-10' src={image} alt="" />
      </div>
    </div>
  );
};

export default Template;

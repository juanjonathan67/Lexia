import React from 'react';
import registerImage from '../assets/Sign Up.png';

function Register() {
  return(
    <>
    <div className="h-screen flex items-center justify-center relative">
      <img src={registerImage} alt="Login" className="w-screen h-full object-cover" />
      <div className="absolute top-[6%] left-[50%] flex justify-left ">
        <label className="text-black text-5xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bolder'}}>
          Sign Up
        </label>
      </div>
      <form>
        <div className="absolute top-[18%] left-[50.5%] flex justify-left ">
            <label className="text-black text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
              Full name
            </label>
          </div>
          <div className="absolute top-[24%] left-[50.5%] w-200 flex justify-left ">
            <input
              id="fullname"
              name="fullname"
              type="text"
              style={{ width: "550px"}}
              required
              className="block bg-purple-primary text-purple-dark text-xl pl-3 h-9 rounded-full py-1.5 ring-purple-dark ring-2 sm:leading-6"
              />        
          </div>
          <div className="absolute top-[31%] left-[50.5%] flex justify-left ">
            <label className="text-black text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
              Username
            </label>
          </div>
          <div className="absolute top-[37%] left-[50.5%] w-200 flex justify-left ">
            <input
              id="username"
              name="username"
              type="text"
              style={{ width: "550px"}}
              required
              className="block bg-purple-primary text-purple-dark text-xl pl-3 h-9 rounded-full py-1.5 ring-purple-dark ring-2 sm:leading-6"
              />        
          </div>
          <div className="absolute top-[44%] left-[50.5%] flex justify-left ">
            <label className="text-black text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
              Email
            </label>
          </div>
          <div className="absolute top-[50%] left-[50.5%] w-200 flex justify-left ">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              style={{ width: "550px"}}
              required
              className="block bg-purple-primary text-purple-dark text-xl pl-3 h-9 rounded-full py-1.5 ring-purple-dark ring-2 sm:leading-6"
              />        
          </div>
          <div className="absolute top-[57%] left-[50.5%] flex justify-left ">
            <label className="text-black text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
              Password
            </label>
          </div>
          <div className="absolute top-[63%] left-[50.5%] w-200 flex justify-left ">
            <input
              id="password"
              name="password"
              type="password"
              style={{ width: "550px"}}
              required
              className="block bg-purple-primary text-purple-dark text-xl pl-3 h-9 rounded-full py-1.5 ring-purple-dark ring-2 sm:leading-6"
              />        
          </div>
          <div className="absolute top-[70%] left-[50.5%] flex justify-left ">
            <label className="text-black text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
              Confirm Password
            </label>
          </div>
          <div className="absolute top-[76%] left-[50.5%] w-200 flex justify-left ">
            <input
              id="password"
              name="password"
              type="password"
              style={{ width: "550px"}}
              required
              className="block bg-purple-primary text-purple-dark text-3xl pl-3 h-9 rounded-full py-1.5 ring-purple-dark ring-2 sm:leading-6"
              />        
          </div>
          <div className="absolute top-[85%] left-[50.5%] flex justify-left">
            <button
              type="submit"
              style={{ width: "550px" , fontFamily: 'Inter, sans-serif', fontWeight: 'normal' }}
              className="text-lg text-center h-10 rounded-full bg-purple-dark font-semibold leading-6  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Register
            </button>
          </div>
        </form>
        <div className="absolute top-[92.5%] left-[61%] flex justify-left ">
        <p className="text-center text-md text-gray-500" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
        Already have an account?{' '}
          <a href="#" className="font-semibold leading-6 text-purple-dark hover:text-indigo-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
    </>
  )
}

export default Register
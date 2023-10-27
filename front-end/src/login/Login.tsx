import React from 'react';
import loginImage from '../assets/Login.png'; // Adjust the path as needed

function Login() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <img src={loginImage} alt="Login" className="w-screen h-full object-cover" />
      <div className="absolute top-[15%] left-[12.5%] flex justify-left ">
        <label className="text-black text-8xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bolder'}}>
          Welcome
        </label>
      </div>
      <form>
        <div className="absolute top-[27%] left-[13%] flex justify-left ">
          <label className="text-black text-5xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
            Username
          </label>
        </div>
        <div className="absolute top-[33%] left-[13%] w-200 flex justify-left ">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            style={{ width: "850px" }}
            required
            className="block bg-purple-primary h-16 rounded-full py-1.5 ring-purple-dark ring-2 sm:text-sm sm:leading-6"
            />        
        </div>
        <div className="absolute top-[42%] left-[13%] flex justify-left ">
          <label className="text-black text-5xl " style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
            Password
          </label>
        </div>
        <div className="absolute top-[48%] left-[13%] w-200 flex justify-left ">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            style={{ width: "850px" }}
            className="block bg-purple-primary h-16 rounded-full py-1.5 ring-purple-dark ring-2 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="absolute top-[64%] left-[13%] flex justify-left">
          <button
            type="submit"
            style={{ width: "850px" , fontFamily: 'Inter, sans-serif', fontWeight: 'normal' }}
            className="text-3xl h-30 rounded-full bg-purple-dark font-semibold leading-6  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Login
          </button>
        </div>
      </form>
      <div className="absolute top-[72%] left-[22.5%] flex justify-left ">
        <p className="text-center text-2xl text-gray-500" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
        Don't have an account?{' '}
          <a href="#" className="font-semibold leading-6 text-purple-dark hover:text-indigo-500">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
import loginImage from '../assets/Login.png';
import React, { useState } from 'react';
import qs from 'qs';
import axios from 'axios';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const data = { 
      'username' : username, 
      'password' : password
    };

    console.log(data);

    const resp = await axios.post('http://localhost:11111/login', data, {headers: {'content-type': 'application/x-www-form-urlencoded'}});

    console.log(resp);

    console.log("token : " + resp.data.token);
  };


  return (
    <div className="h-screen flex items-center justify-center relative">
      <img src={loginImage} alt="Login" className="w-screen h-full object-cover" />
      <div className="absolute top-[15%] left-[12.5%] flex justify-left ">
        <label className="text-black text-5xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bolder'}}>
          Welcome
        </label>
      </div>
        <div className="absolute top-[27%] left-[13%] flex justify-left ">
          <label className="text-black text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
            Username
          </label>
        </div>
        <div className="absolute top-[33%] left-[13%] w-200 flex justify-left ">
          <input
            id="username"
            name="username"
            type="text"
            style={{ width: "450px" }}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            className="block text-black bg-purple-primary h-10 rounded-full py-1.5 ring-purple-dark ring-2 sm:text-sm sm:leading-6"
            />        
        </div>
        <div className="absolute top-[42%] left-[13%] flex justify-left ">
          <label className="text-black text-2xl " style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
            Password
          </label>
        </div>
        <div className="absolute top-[48%] left-[13%] w-200 flex justify-left ">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="block text-black bg-purple-primary h-10 w-[450px] rounded-full py-1.5 ring-purple-dark ring-2 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="absolute top-[64%] left-[13%] flex justify-left">
          <button
            type="submit"
            onClick={handleLogin}
            style={{ width: "450px" , fontFamily: 'Inter, sans-serif', fontWeight: 'normal' }}
            className="text-1xl h-10 rounded-full bg-purple-dark font-semibold leading-6  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Login
          </button>
        </div>
      <div className="absolute top-[73%] left-[22%] flex justify-left ">
        <p className="text-center text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif', fontWeight: "normal"}}>
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
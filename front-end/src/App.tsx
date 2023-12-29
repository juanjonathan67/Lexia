import React from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from 'react-router-dom';

import Farm from './assets/Farm.png';
import Town from './assets/Town.png';
import Mines from './assets/Mines.png';
import Snow from './assets/Snow.png';
import Logo from './assets/Logo.png';

function App() {
  const images = [Town, Farm, Mines, Snow];
  const navigate = useNavigate();

  return (
    <>
      <div className='h-screen w-screen'>
        <div className="slide-container">
          <Fade arrows={false} duration={3000} infinite={true} pauseOnHover={false}>
            {images.map((fadeImage, index) => (
              <div key={index}>
                <img className='w-screen h-screen' src={fadeImage} />
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-12 z-10 w-1/5 h-1/6'>
        <img className='w-full h-full' src={Logo} alt='Logo' />
      </div>
      <div onClick={() => navigate("/register")} className='absolute bottom-48 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10 text-4xl font-bold text-purple-900 bg-purple-400 rounded-lg px-2 hover:bg-purple-900 hover:text-purple-400'>New Game</div>
      <div onClick={() => navigate("/login")} className='absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10 text-4xl font-bold text-purple-900 bg-purple-400 rounded-lg px-2 hover:bg-purple-900 hover:text-purple-400'>Load Game</div>
      <div onClick={() => navigate("/")} className='absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10 text-4xl font-bold text-purple-900 bg-purple-400 rounded-lg px-2 hover:bg-purple-900 hover:text-purple-400'>Options</div>
    </>
  )
}

export default App

//Home page

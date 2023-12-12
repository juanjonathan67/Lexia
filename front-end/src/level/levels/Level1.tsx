import React, { useState, useEffect } from "react";
import SpeechRecognition from "../../api/speechRecognition";

import Apple from "./LevelAssets/Apple.png";
import Mic from "./LevelAssets/mic.svg";
import MicOff from "./LevelAssets/micOff.svg";

function Level1() {
  const spelling = ["A", "P", "P", "L", "E"];
  const answer = ["A A", "P P", "P P", "L L", "E E"];
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = SpeechRecognition();

  // useEffect to handle successful speech recognition
  useEffect(() => {
    // Check if the recognized text matches the current letter
    if (text && text.toUpperCase() === answer[currentLetterIndex]) {
      // Increment the index to move to the next letter
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    }
  }, [text, currentLetterIndex]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center">
        <img src={Apple} className="mx-auto mb-4 w-1/3" alt="Apple" />

        {/* Speech Recognition */}
        {hasRecognitionSupport ? (
          <>
            {/* Mic and MicOff as buttons */}
            <button
              onClick={isListening ? stopListening : startListening}
              className="focus:outline-none bg-transparent"
            >
              {isListening ? (
                <img src={Mic} className="w-12" alt="Mic" />
              ) : (
                <img src={MicOff} className="w-12" alt="Mic Off" />
              )}
            </button>

            {isListening ? (
              <div className="text-green-500 mt-2">Listening...</div>
            ) : null}
            <br />
            {/* Display the current letter */}
            <div className="text-3xl font-bold mt-4">
              {spelling[currentLetterIndex]}
            </div>
          </>
        ) : (
          <h1 className="text-2xl font-bold text-red-500 mt-4">
            Your browser has no speech recognition support
          </h1>
        )}
      </div>
    </div>
  );
}

export default Level1;
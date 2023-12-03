import { useEffect, useState } from "react";
import IFrameLevel from "./levels/iframeLevel";
import SpeechRecognition from "../api/speechRecognition";
import TextToSpeech from "../api/textToSpeech";
import { createWorker } from "tesseract.js";

// for testing purposes
function Level() {
  const [speechText, setSpeechText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  const worker = createWorker();

  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = SpeechRecognition();

  const {
    elapsedTime,
    isSpeaking,
    startSpeaking,
    stopSpeaking,
    hasTextToSpeechSupport,
  } = TextToSpeech();

  const handleChangeImage = (event: any) => {
    setSelectedImage(event.target.files[0])
  }

  const convertImageToText = async () => {
    if(!selectedImage) return;

    (await worker).load();
    (await worker).reinitialize('eng');
    const result = (await worker).recognize(selectedImage);
    console.log((await result).data.text);
    setTextResult((await result).data.text);  
  }

  useEffect(() => {
    convertImageToText();
  }, [selectedImage])

  return(
    <>
      <div>
        <IFrameLevel url="/Lexia1/Lexia.html"/>
      </div>
      {/* Speech Recognition */}
      {hasRecognitionSupport ? (
        <>
          <div>
            <button onClick={startListening}>Start Listening</button>
          </div>

          <div>
            <button onClick={stopListening}>Stop Listening</button>
          </div>

          {isListening ? <div>Your browser is currently listening</div> : null}
          {text}

        </>
      ) : (
        <h1>Your browser has no speech recognition support</h1>
      )}


      {/* Text To Speech */}
      {hasTextToSpeechSupport ? (
        <>
          <label>
            Text to speech : 
            <textarea value={speechText} onChange={event => setSpeechText(event.target.value)} rows={4} cols={40}/>
            <div>
              <button onClick={() => startSpeaking(speechText)}>Start Speaking</button>
              <button onClick={stopSpeaking}>Stop Speaking</button>
            </div>
            
          </label>
        </>
      ) : (
        <h1>Your browser has no text to speech support</h1>
      )}

      {/* OCR */}
      <>
        <div>
          <h1>Input Image</h1>
          <div>
            <label htmlFor="upload">Upload Image</label>
            <input type="file" id="upload" accept="image/*" onChange={handleChangeImage} />
          </div>

          <div>
            {selectedImage && (
              <div>
                <img src={URL.createObjectURL(selectedImage)} alt="thumb" />
              </div>
            )}
            {textResult && (
              <div>
                <p>{textResult}</p>
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
}

export default Level
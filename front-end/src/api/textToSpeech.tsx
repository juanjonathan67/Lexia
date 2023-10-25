import { useEffect, useState } from "react";

let speech = new SpeechSynthesisUtterance();

function TextToSpeech() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if(!speech) return;

    speech.onend = (event: SpeechSynthesisEvent) => {
      console.log("onend event : ", event);
      setElapsedTime(event.elapsedTime);
    }
  }, []);

  const startSpeaking = (text: string) => {
    speech.text = text;
    setIsSpeaking(true);
    window.speechSynthesis.speak(speech);
  }

  const stopSpeaking = () => {
    setIsSpeaking(false);
    window.speechSynthesis.cancel();
  }

  return {
    elapsedTime,
    isSpeaking,
    startSpeaking,
    stopSpeaking,
    hasTextToSpeechSupport: !!speech, 
  }
}

export default TextToSpeech
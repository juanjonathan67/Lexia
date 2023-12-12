import { useEffect, useState } from "react";

let recognition: any = null;

if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

function SpeechRecognition() {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      console.log("onresult event : ", event);
      setText(event.results[0][0].transcript);
      stopListening();
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }, []);

  const startListening = () => {
    setText("");
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  // Timeout mechanism to stop listening after 5 seconds of silence
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleSpeechTimeout = () => {
      stopListening();
    };

    if (isListening) {
      timeout = setTimeout(handleSpeechTimeout, 8000); // Adjust the timeout duration as needed
    }

    return () => clearTimeout(timeout);
  }, [isListening]);

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
}

export default SpeechRecognition;

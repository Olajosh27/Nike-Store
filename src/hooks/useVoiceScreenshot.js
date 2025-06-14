import { useState, useEffect, useRef, useCallback } from 'react';
import { captureAndDownloadScreenshot } from '../utils/screenshotUtils';

const useVoiceScreenshot = (targetRef) => {
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [browserSupport, setBrowserSupport] = useState(true);

  const speak = useCallback((text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech Synthesis not supported in this browser.');
    }
  }, []);

  const takeScreenshot = useCallback(async () => {
    if (listening && recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }

    try {
      await captureAndDownloadScreenshot(
        targetRef.current,
        `page-screenshot-${Date.now()}.png`,
        setFeedback,
        speak
      );
    } catch (error) {
      console.error('Hook-level screenshot error:', error);
    } finally {
      if (browserSupport && recognitionRef.current && !listening) {
        setTimeout(() => {
          try {
            recognitionRef.current.start();
            setListening(true);
            setFeedback('Listening for "Take screenshot"...');
          } catch (e) {
            console.warn('Failed to restart recognition after screenshot:', e);
            setFeedback('Failed to restart listening. Please refresh page if needed.');
          }
        }, 2000);
      }
    }
  }, [targetRef, listening, speak, browserSupport]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        console.log('Voice input:', transcript);
        if (transcript.toLowerCase().includes('take screenshot')) {
          takeScreenshot();
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          setFeedback('Microphone access denied. Please allow microphone in browser settings.');
        } else {
          setFeedback(`Error: ${event.error}. Attempting to restart listening.`);
        }
        setListening(false);
      };

      recognitionRef.current.onend = () => {
        if (browserSupport && !listening) {
          console.log('Speech recognition ended. Attempting to restart...');
          try {
            recognitionRef.current.start();
            setListening(true);
            setFeedback('Listening for "Take screenshot"...');
          } catch (e) {
            console.warn('Failed to restart recognition:', e);
            setFeedback('Failed to restart listening. Please refresh page.');
          }
        }
      };

      try {
        recognitionRef.current.start();
        setListening(true);
        setFeedback('Listening for "Take screenshot"...');
      } catch (e) {
        console.error('Initial speech recognition start failed:', e);
        setFeedback('Failed to start listening automatically. Please refresh or check browser permissions.');
        setListening(false);
      }

    } else {
      setBrowserSupport(false);
      setFeedback('Speech Recognition not supported in this browser.');
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, [browserSupport, listening, takeScreenshot]);

  return { listening, feedback, browserSupport };
};

export default useVoiceScreenshot;
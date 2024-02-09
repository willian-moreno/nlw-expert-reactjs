export function useSpeechRecognition() {
  const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window

  if (!isSpeechRecognitionAPIAvailable) {
    return {
      isSpeechRecognitionAPIAvailable,
      speechRecognition: null
    }
  }

  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

  const speechRecognition = new SpeechRecognitionAPI()

  return {
    isSpeechRecognitionAPIAvailable,
    speechRecognition
  }
}
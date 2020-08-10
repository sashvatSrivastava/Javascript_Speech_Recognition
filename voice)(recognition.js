const button = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();

recognition.onstart = function(){
  console.log("Voice is activated, you can now use your Microphone")
}

recognition.onresult= function(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
}

button.addEventListener('click', () => {
  recognition.start();
})

function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);

}

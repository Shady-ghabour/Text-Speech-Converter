let speech = new SpeechSynthesisUtterance();
const selector = document.getElementById("voiceSelector");
const btn = document.querySelector(".btn");
const text = document.getElementById("textInput");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, index)=> (selector.options[index]) = new Option (voice.name, index));
}

selector.addEventListener("change", ()=>{
    speech.voice = voices[selector.value];
})

btn.addEventListener("click", ()=>{
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
})





























// let voices = [];

// window.speechSynthesis.onvoiceschanged = () =>{
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];

//     voices.forEach((voice, index) => (selector.options[index]) = new Option(voice.name, index));
// };

// selector.addEventListener("change", ()=>{
//     speech.voice = voices[selector.value];
// })

// btn.addEventListener("click", ()=>{
//     speech.text = text.value;
//     window.speechSynthesis.speak(speech);
// })

let min = 0;
let max = 100;
let currentGuess = null;
let gameActive = false;

const startBtn = document.getElementById('start-btn');
const guessDiv = document.getElementById('guess');
const tooLowBtn = document.getElementById('too-low');
const tooHighBtn = document.getElementById('too-high');
const correctBtn = document.getElementById('correct');
const feedbackButtons = document.getElementById('feedback-buttons');

function makeGuess(){
    currentGuess = Math.floor ((min + max)/2);
    guessDiv.innerText = `Computeren gætter: ${currentGuess}`;
}

//starter spillet
startBtn.addEventListener('click', ()=> {
    gameActive = true;
    min = 0;
    max = 100;
    guessDiv.classList.remove('correct-guess');
    feedbackButtons.style.display= 'block';
    startBtn.disabled = true;
    makeGuess();
});

tooLowBtn.addEventListener('click', () => {
    if (!gameActive) return;
    min = currentGuess + 1;  
    makeGuess();
});

tooHighBtn.addEventListener('click', () => {
    if (!gameActive) return;
    max= currentGuess - 1;
    makeGuess();
} )

correctBtn.addEventListener('click', () =>{
    if (!gameActive) return;
    guessDiv.innerText = `Computeren har gættet rigtigt! Det var ${currentGuess}`;
    guessDiv.classList.add('correct-guess');
    gameActive = false;
    feedbackButtons.style.display = 'none';
    startBtn.disabled = false;
  
})

feedbackButtons.style.display = 'none';


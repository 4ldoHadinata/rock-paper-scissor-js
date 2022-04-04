const start = document.querySelector('#start');
const opponent = document.querySelector('#opponent');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const choices = [
    'rock', 'paper', 'scissor'
];

start.addEventListener('click', function() {
    const choice = document.querySelector('input[name="choice"]:checked')?.value;
    const randomNum = Math.floor(Math.random() * 3);
    const opponentChoice = choices[randomNum];
    if (!choice) {
        alert('Pick one!');
    } else {
        opponent.innerHTML = opponentChoice;
        if (choice === 'rock') {
            if (opponentChoice === 'rock') {                
                result.innerHTML = 'Draw';
            } else if (opponentChoice === 'paper') {
                result.innerHTML = 'Lose';
            } else {
                result.innerHTML = 'Win';
            }
        } else if (choice === 'paper') {
            if (opponentChoice === 'rock') {                
                result.innerHTML = 'Win';
            } else if (opponentChoice === 'paper') {
                result.innerHTML = 'Draw';
            } else {
                result.innerHTML = 'Lose';
            }
        } else if (choice === 'scissor') {
            if (opponentChoice === 'rock') {                
                result.innerHTML = 'Lose';
            } else if (opponentChoice === 'paper') {
                result.innerHTML = 'Win';
            } else {
                result.innerHTML = 'Draw';
            }
        }
    }
});
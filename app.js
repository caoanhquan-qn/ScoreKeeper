const firstButton = document.querySelector('#btn-one');
const secondButton = document.querySelector('#btn-two');
const playerOneScore = document.querySelector('#firstPlayer');
const playerTwoScore = document.querySelector('#secondPlayer');
const selectScore = document.querySelector('select');
const resetButton = document.querySelector('#btn-reset');
let initialScorePlayerOne = 0;
let initialScorePlayerTwo = 0;
firstButton.addEventListener('click', function () {
    initialScorePlayerOne++;
    playerOneScore.innerText = `${initialScorePlayerOne}`;
    if (playerOneScore.innerText === selectScore.value) {
        firstButton.disabled = true;
        secondButton.disabled = true;
        firstButton.style.backgroundColor = `rgba(0,255,0,0.2)`;
        secondButton.style.backgroundColor = `rgba(0,0,255,0.2)`;
        playerOneScore.style.color = `rgb(0,255,0)`;
        playerTwoScore.style.color = `rgb(255,0,0)`;
    }

})

secondButton.addEventListener('click', function () {
    initialScorePlayerTwo++;
    playerTwoScore.innerText = `${initialScorePlayerTwo}`;
    if (playerTwoScore.innerText === selectScore.value) {
        firstButton.disabled = true;
        secondButton.disabled = true;
        firstButton.style.backgroundColor = `rgba(0,255,0,0.2)`;
        secondButton.style.backgroundColor = `rgba(0,0,255,0.2)`;
        playerOneScore.style.color = `rgb(255,0,0)`;
        playerTwoScore.style.color = `rgb(0,255,0)`;
    }
})

resetButton.addEventListener('click', function () {
    window.location.reload();
})
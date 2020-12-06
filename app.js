const firstButton = document.querySelector('#btn-one');
const secondButton = document.querySelector('#btn-two');
const playerOneScore = document.querySelector('#firstPlayer');
const playerTwoScore = document.querySelector('#secondPlayer');
const selectScore = document.querySelector('select');
const resetButton = document.querySelector('#btn-reset');
let initialScorePlayerOne = 0;
let initialScorePlayerTwo = 0;
function gameOver() {
    firstButton.disabled = true;
    secondButton.disabled = true;
}
firstButton.addEventListener('click', function () {
    initialScorePlayerOne++;
    playerOneScore.innerText = initialScorePlayerOne;
    if (parseInt(playerOneScore.innerText) === parseInt(selectScore.value)) {
        gameOver();
        playerOneScore.classList.add('has-text-primary');
        playerTwoScore.classList.add('has-text-danger');
    }

})

secondButton.addEventListener('click', function () {
    initialScorePlayerTwo++;
    playerTwoScore.innerText = initialScorePlayerTwo;
    if (parseInt(playerTwoScore.innerText) === parseInt(selectScore.value)) {
        gameOver();
        playerOneScore.classList.add('has-text-danger');
        playerTwoScore.classList.add('has-text-primary');
    }
})

resetButton.addEventListener('click', function () {
    window.location.reload();
})

selectScore.addEventListener('change', function () {
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    playerOneScore.classList.remove('has-text-primary', 'has-text-danger');
    playerTwoScore.classList.remove('has-text-primary', 'has-text-danger');
    initialScorePlayerOne = 0;
    initialScorePlayerTwo = 0;
    firstButton.disabled = false;
    secondButton.disabled = false;
})
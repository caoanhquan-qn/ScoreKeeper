let p1 = {
    button: document.querySelector('#btn-one'),
    score: document.querySelector('#firstPlayer'),
    initialScore: 0
}

let p2 = {
    button: document.querySelector('#btn-two'),
    score: document.querySelector('#secondPlayer'),
    initialScore: 0
}

const selectScore = document.querySelector('select');
const resetButton = document.querySelector('#btn-reset');

function gameOver() {
    p1.button.disabled = true;
    p2.button.disabled = true;
}

function updateScore(player1, player2) {
    player1.initialScore += 1;
    player1.score.innerText = player1.initialScore;
    if (parseInt(player1.score.innerText) === parseInt(selectScore.value)) {
        gameOver();
        player1.score.classList.add('has-text-primary');
        player2.score.classList.add('has-text-danger');
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});
p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

resetButton.addEventListener('click', function () {
    window.location.reload();
})

selectScore.addEventListener('change', function () {
    for (let p of [p1, p2]) {
        p.score.innerText = 0;
        p.score.classList.remove('has-text-primary', 'has-text-danger');
        p.initialScore = 0;
        p.button.disabled = false;
    }
})
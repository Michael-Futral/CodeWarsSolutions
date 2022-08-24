const game = {

    rock: ['lizard', 'scissors'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],

    checkWinner: function (p1, p2) {
        return p1 == true ? "Player 1 Won!"
            : p2 == true
                ? "Player 2 Won!"
                : 'Draw!'
    }
}

function rpsls(pl1, pl2) {
    return game.checkWinner(game[pl1].includes(pl2), game[pl2].includes(pl1))
}
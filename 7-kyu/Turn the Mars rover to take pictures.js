// In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

// Mars rover can face 4 different directions, that would be N, S, E, W. Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

// For example:

// if it asks turn N E the expected result would be right
// if it asks turn N W the expected result would be left
// Mars rover can only make one move at a time and it will only request positions that require a single move.

// Can you write an algorithm that tells if it should move left or right?


function turn(current, target) {

    let turnRight = ['N E', 'E S', 'S W', 'W N']
    let commandTurn = `${current} ${target}`
    let postion = turnRight.indexOf(commandTurn)

    return postion === -1 ? 'left' : 'right'
}

//OR

const directions = {
    N: { W: "left", E: "right" },
    S: { W: "right", E: "left" },
    W: { N: "right", S: "left" },
    E: { N: "left", S: "right" },
}

function turn(current, target) {
    return directions[current][target]
}

//OR

function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
}

//OR

function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

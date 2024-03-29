// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

function updateLight(current) {

    if (current === 'green') {
        return 'yellow'
    } else if (current === 'red') {
        return 'green'
    } else {
        return 'red'
    }
}

//OR

//const updateLight = current => current === 'green' ? 'yellow' : current === 'red' ? 'green' : 'red'

//OR

// const updateLight = current => ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
// })[current]

//OR

// function updateLight(current) {
//     var dict = {'green' : 'yellow',
//                 'yellow' : 'red',
//                 'red' : 'green'};
//     return dict[current];
//   }
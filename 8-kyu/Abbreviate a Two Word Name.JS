// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
    var nam = name.split(' ');
    return nam[0].charAt(0).toUpperCase() + '.' + nam[1].charAt(0).toUpperCase();
}

//OR

// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }
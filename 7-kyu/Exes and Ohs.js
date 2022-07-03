// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    return str.toLowerCase().split('').filter(v => v == 'x').length == str.toLowerCase().split('').filter(v => v == 'o').length
        ? true
        : str.toLowerCase().split('').filter(v => v == 'x').length == 0 && str.toLowerCase().split('').filter(v => v == 'o').length == 0
            ? true : false
}
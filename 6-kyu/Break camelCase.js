// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let answer = []
    let upperCase = string.toUpperCase()

    string.split('')
        .map((el, i) => el === upperCase[i] ? answer.push(' ' + el) : answer.push(el))

    return answer.join('')
}
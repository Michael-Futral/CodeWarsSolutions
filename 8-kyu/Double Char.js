// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    // Your code here
    let answer = ''

    for (let i = 0; i < str.length; i++) {
        answer += str[i] + str[i]
    }
    return answer
}

//OR

const doubleChar = (str) => str.split("").map(c => c + c).join("");
function getEvenNumbers(numbersArray) {
    let answer = []
    numbersArray.map(el => el % 2 == 0 ? answer.push(el) : "")
    return answer
}

//or

const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);
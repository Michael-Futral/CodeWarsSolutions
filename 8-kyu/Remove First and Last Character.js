function removeChar(str) {

    let answer = str.split('')
    answer.pop()
    answer.shift()

    return answer.join('')
};
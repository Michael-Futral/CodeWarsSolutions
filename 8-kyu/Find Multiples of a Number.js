function findMultiples(integer, limit) {

    let answer = []

    for (let i = integer; i <= limit; i += integer) {
        answer.push(i)
    }
    return answer
}

//or

function findMultiples(integer, limit) {

    let answer = [integer]

    for (let i = 0; answer[i] <= [limit]; i++) {
        answer.push(answer[i] + integer)
    }
    return answer[answer.length - 1] < limit ? answer : answer.slice(0, -1)
}
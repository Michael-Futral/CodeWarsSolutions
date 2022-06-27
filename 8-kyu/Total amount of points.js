function points(games) {
    // your code here
    let concatStr = games.join().split(',').join('').split(":").join('')
    let answer = 0

    for (let i = 0, j = 1, k = 0; k <= games.length - 1; i += 2, j += 2, k++) {
        answer += concatStr[i] > concatStr[j] ? 3 : concatStr[i] < concatStr[j] ? 0 : 1
    }
    return answer
}
function high(x) {

    let alphaNum = '-abcdefghijklmnopqrstuvwxyz'
    let wordArr = x.split(' ')

    let currSum = 0
    let sum = 0
    let maxIdx = 0

    for (let i = 0; i < wordArr.length; i++) {
        currSum = 0
        for (let j = 0; j < wordArr[i].length; j++) {
            currSum += alphaNum.indexOf(wordArr[i][j])
        }
        currSum > sum ? maxIdx = i : maxIdx = maxIdx
        currSum > sum ? sum = currSum : sum = sum
    }
    return wordArr[maxIdx]
}

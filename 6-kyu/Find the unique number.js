function findUniq(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    return answer = sortedArr[0] == sortedArr[1] ? sortedArr[sortedArr.length - 1] : sortedArr[0]
}
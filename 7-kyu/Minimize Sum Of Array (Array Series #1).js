function minSum(arr) {
    let newArr = arr.sort((a, b) => a - b)
    let sum = 0

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        sum += newArr[i] * newArr[j]
    }
    return sum
}
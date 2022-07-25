function sumArray(array) {

    array = array || []

    return array.sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((pre, curr) => pre + curr, 0)
}
function sumOfMinimums(arr) {
    return arr.map(subArr => subArr
        .sort((low, high) => low - high)[0])
        .reduce((pre, curr) => pre + curr, 0)
}
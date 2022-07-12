var summation = function (num) {
    if (num < 1) return 0
    return num + summation(num - 1)
}
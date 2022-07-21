function sumMul(n, m) {

    if (n == m || n > m) return "INVALID"

    let sum = 0
    let nPlus = n

    while (n <= m) {
        sum += n;
        n += nPlus
    }
    return sum
}
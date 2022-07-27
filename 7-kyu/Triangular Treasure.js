// Return the nth triangular number
function triangular(n) {

    if (n <= 0) return 0

    let level = 1
    let total = 0

    while (n >= level) {
        total += level
        level++
    }
    return total
}
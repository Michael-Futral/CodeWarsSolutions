function factorial(n) {

    if (n < 0 || n > 12) throw RangeError("The argument must be between 0 and 12.")
    if (n == 1 || n == 0) return 1

    return n * factorial(n - 1)
}
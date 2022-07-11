const divisions = (n, divisor) => {

    if (n == divisor) return 1
    if (n < divisor) return 0

    let counter = 0

    for (let i = n; i > divisor; i = i / divisor) {
        counter++
    }
    return counter
};
function persistence(num) {

    if (num.toString().length == 1) return 0

    let count = 1
    let value = num.toString().split('').reduce((pre, curr) => pre * curr)

    while (value > 9) {
        value = value.toString().split('').reduce((pre, curr) => pre * curr)
        count++
    }
    return count
}
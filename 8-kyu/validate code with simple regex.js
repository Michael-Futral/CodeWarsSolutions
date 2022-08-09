function validateCode(code) {
    let result = code.toString()
    return result[0] > 0 && result[0] < 4
}
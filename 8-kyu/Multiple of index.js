function multipleOfIndex(array) {
    let result = []

    array.map((el, idx) => el % idx == 0 ? result.push(el) : '')

    return result
}
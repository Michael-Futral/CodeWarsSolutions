function strCount(str, letter) {
    let count = 0
    let strArr = str.split('')

    strArr.forEach((v) => (v === letter && count++));
    return count
}
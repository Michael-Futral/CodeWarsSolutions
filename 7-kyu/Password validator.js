function password(str) {

    let capLength = str.replace(/[A-Z]/g, '').length,
        lowLength = str.replace(/[a-z]/g, '').length,
        numLength = str.replace(/[0-9]/g, '').length

    if (capLength == str.length || lowLength == str.length) return false
    if (str.length < 8) return false
    if (numLength == str.length) return false

    return true
}
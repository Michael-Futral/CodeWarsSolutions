function validateUsr(username) {

    if (username.length > 16 || username.length < 4) return false

    let result = username.replace(/[A-Z' ']/g, '')

    return result.length == username.length
}
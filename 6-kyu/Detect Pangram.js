function isPangram(string) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let newStr = [...new Set(string)].join('').replace(/[^a-z0-9]/gi, '')

    return alphabet.length <= newStr.length
}
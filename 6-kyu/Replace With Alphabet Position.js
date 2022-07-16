function alphabetPosition(text) {

    let alphabet = ' abcdefghijklmnopqrstuvwxyz'
    let noNums = text.toLowerCase().replace(/[^a-zA-Z]/g, '')
    let letterNum = noNums.split('').map(el => alphabet.indexOf(el)).join(' ')

    return letterNum
}
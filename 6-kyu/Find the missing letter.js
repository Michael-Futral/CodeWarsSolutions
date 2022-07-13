function findMissingLetter(array) {

    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let start = letters.indexOf(array[0])
    let counter = 0

    while (true) {
        if (array[counter] !== letters[start + counter]) {
            return letters[start + counter]
        }
        counter++
    }
}
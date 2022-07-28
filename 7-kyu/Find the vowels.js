function vowelIndices(word) {

    let result = []
    let vowels = 'aeiouy'

    word.toLowerCase()
        .split('')
        .map((el, idx) => vowels
            .includes(el) == true ? result
                .push(idx + 1) : '')

    return result
}
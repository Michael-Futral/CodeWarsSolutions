var encryptThis = function (text) {

    let words = []
    let textArr = text.split(' ')

    textArr.forEach(word => {
        if (word.length == 1) { words.push(word.charCodeAt(0)) }
        if (word.length == 2) { words.push(word.charCodeAt(0) + word[word.length - 1]) }
        if (word.length > 2) { words.push(word.charCodeAt(0) + word[word.length - 1] + word.slice(2, word.length - 1) + word[1]) }
    });

    return words.join(' ')
}
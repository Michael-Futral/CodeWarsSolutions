function order(words) {

    if (words == '') return ''

    let wordsArr = words.split(' ')
    let answer = []

    for (let i = 0; i < wordsArr.length; i++) {
        answer.push(wordsArr.filter(word => word.includes(i + 1)))
    }
    return answer.join(' ')
}

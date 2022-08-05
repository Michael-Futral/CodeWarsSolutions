function wordsToMarks(str) {
    return [...str.toLowerCase()]
        .reduce((pre, curr) => pre + curr.charCodeAt() - 96, 0)
}
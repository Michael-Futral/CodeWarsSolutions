var orderedCount = function (text) {
    let result = [],
        charArr = [...new Set(text)],
        textArr = text.split('')

    for (let i = 0, count = 0; i < charArr.length; i++, count = 0) {
        textArr.reduce((a, v) => (v === charArr[i] ? count++ : count), 0)
        result.push([charArr[i], count])
    }
    return result;
}
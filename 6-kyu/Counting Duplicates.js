function duplicateCount(text) {

    if (text == '') return 0

    let counter = 0
    let textArr = text.toLowerCase().split('').sort()
    let checkedArr = []

    for (let i = 0; i < textArr.length; i++) {
        textArr[i] == textArr[i + 1] && (checkedArr.includes(textArr[i])) == false ? counter++ : '';
        checkedArr.push(textArr[i])
    }
    return counter
}
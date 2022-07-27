function titleCase(title, minorWords) {

    if (title == '') return title
    if (minorWords == undefined) minorWords = ''

    let minorArr = minorWords.toLowerCase().split(' '),
        titleArr = title.toLowerCase().split(' '),
        pushArr = []

    for (let i = 0; i < titleArr.length; i++) {
        if (!minorArr.includes(titleArr[i]) || i == 0) {
            pushArr.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1));
            continue;
        }
        pushArr.push(titleArr[i])
    }
    return pushArr.join(' ')
}
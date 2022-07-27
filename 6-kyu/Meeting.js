function meeting(s) {

    let pushArr = []
    let newArr = s.toUpperCase()
        .split(';')
        .map(el => el.split(':'))

    for (let i = 0; i < newArr.length; i++) {
        newArr[i].reverse()
        pushArr.push(newArr[i].join(', '))
        console.log(pushArr)
    }

    let answer = pushArr.sort().join(')(')

    return '(' + answer + ')'
}
function well(x) {
    let count = 0

    x.map(el => el === 'good' ? count++ : '')

    return count < 1 ? 'Fail!' : count <= 2 ? 'Publish!' : 'I smell a series!'
}

//or

function well(x) {

    let count = x.reduce((pre, curr) => curr == 'good' ? pre += 1 : pre, 0)

    return count < 1 ? 'Fail!' : count <= 2 ? 'Publish!' : 'I smell a series!'
}
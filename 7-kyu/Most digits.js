function findLongest(array) {

    let answer = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length > answer.toString().length) answer = array[i]
    }
    return answer
}

//OR

function findLongest(array) {
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}
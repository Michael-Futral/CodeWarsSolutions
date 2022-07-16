"use strict";

function flattenAndSort(array) {

    let newArr = []
    let sortedArr = array.map(arr => arr.map(el => newArr.push(el)))

    return newArr.sort((a, b) => a - b);
}

//or

"use strict";

function flattenAndSort(array) {
    return [].concat(...array).sort((a, b) => a - b);
}
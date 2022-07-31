function colourAssociation(array) {

    let result = []

    for (let i = 0, j = 0, obj = {}; i < array.length; i++, j = 0, obj = {}) {
        obj[array[i][j]] = array[i][j + 1]
        result.push(obj)
    }
    return result
}

//OR

function colourAssociation(array) {
    const myArr = array.map(([colour, association]) => ({ [colour]: association }))
    return myArr
}
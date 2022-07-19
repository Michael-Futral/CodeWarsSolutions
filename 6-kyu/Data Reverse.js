function dataReverse(data) {
    let newData = []
    data.reverse()

    for (let i = 0; i <= data.length - 8; i += 8) {
        newData.push(data.slice(i, i + 8).reverse())
    }
    return newData.flat(1)
}
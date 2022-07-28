function adjacentElementsProduct(arr) {

    let maxProd = []

    for (let i = 0; i < arr.length - 1; i++) {
        maxProd.push(arr[i] * arr[i + 1])
    }
    return Math.max(...maxProd)
}
function arrAdder(arr) {

    return arr[0].map((_, i) => arr.map((_, j) => arr[j][i])
        .join(""))
        .join(" ");
}
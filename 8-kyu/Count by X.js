function countBy(x, n) {
    let z = [x];
    let currentNum = x
    for (let i = 1; i < n; i++) {
        currentNum += x
        z.push(currentNum)
    }
    return z;
}
const isNegativeZero = (n) => Object.is(n, -0)

//OR

// const isNegativeZero = n =>
//     n === 0 ? (1 / n) < 0 : false
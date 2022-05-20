function SeriesSum(n) {
    if (n === 0) {
        return '0.00';
    } else if (n === 1) {
        return '1.00';
    } else {
        let sum = 1;
        let count = 1;
        for (let i = 1; i < n; i++) {
            count += 3;
            let frac = '1/' + count.toString().split('/');
            let split = frac.split('/');
            let result = parseInt(split[0], 10) / parseInt(split[1], 10);
            sum += Number(result);
        }
        return sum.toFixed(2);
    }
}

//OR

// function SeriesSum(n) {
//     if (0 == n) return "0.00"
//     let s = 1;
//     for (let i = 1; i < n; i++) s += 1 / (1 + 3 * i);
//     return `${s.toFixed(2)}`;
// }
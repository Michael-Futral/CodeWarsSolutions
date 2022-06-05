// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


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
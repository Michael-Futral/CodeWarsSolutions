const sumOfDifferences = array =>
    array.length <= 1 ? 0 : Math.max(...array) - Math.min(...array)


//OR

// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);

//OR

// function sumOfDifferences(arr) {
//     let sorted = arr.sort((a, b) => b - a)
//     let sum = 0;
//     for (let i = 0; i < sorted.length - 1; i++) {
//       sum += (arr[i] - arr[i + 1]);
//     }
//     return sum;
//   }

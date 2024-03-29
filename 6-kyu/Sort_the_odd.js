// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6,

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray([2, 3, 5, 8, 6, 7, 7, 1]));
  //OR

//   function sortArray(array) {
//     // Return a sorted array.
//     const even = array.map((elm) => elm % 2 === 0 ? elm : "");
//     const odd = array.filter((elm) => elm % 2 !== 0).sort((a, b) => a - b);
//     const result = [];

//     for (let i = 0, j = 0; i < array.length; i += 1) {
//       if (even[i] === "") {
//         result.push(odd[+j]);
//         j += 1;
//       } else {
//         result.push(even[i]);
//       }
//     }

//     return result;
//   }
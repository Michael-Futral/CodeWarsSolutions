function eachCons(array, n) {
    let res = [];

    for (let i = 0; i < array.length; i++) {
        res.push(array.slice(i, i + n));
    }

    return res.filter(e => e.length === n);
}

  //OR

//   function eachCons(array, n) {
//     const len = array.length;
//     if (!len && n > len) return [];

//     const lastElement = array[len - 1];

//     const result = [];

//     for(let i = 0; i <= len - n; i++ ) {
//       const item = array.slice(i, i + n);
//       result.push(item)
//     }

//     return result;
//   }
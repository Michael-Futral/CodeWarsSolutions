function oddOrEven(array) {
    //enter code here
    if (array === [] || array === [1] || array === [0]) {
        return "even";
    }

    let sum = array.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    if (sum % 2 == 0) {
        return "even"
    } else {
        return "odd";
    }
}

  //OR

//   function oddOrEven(arr) {
//       return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
//     }

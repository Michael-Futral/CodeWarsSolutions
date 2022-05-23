function encode(str, n) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

    var string = {};

    for (var i = 0; i < letters.length; i++) {
        string[letters[i]] = number[i];
    }

    var translated = [];
    var newArr = [];
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        translated.push(string[str[i]]);
    }

    var arr1 = translated;
    var arr2 = n.toString().split("").map(function (item) {
        return parseInt(item, 10);
    });

    for (var j = 0; j < arr1.length; j++) {
        if (counter === arr2.length) {
            counter = 0;
        }
        newArr.push(arr1[j] + arr2[counter]);
        counter++;
    }
    return newArr;
}

  //or

//   function encode(str, n) {
//     const key = String(n)
//     return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length]))
//   }

//or

// function encode(str,  n) {
//     let Q = new Queue([...''+n]);
//     return [...str].map(x => 'abcdefghijklmnopqrstuvwxyz'.indexOf(x) + 1 + +Q.next());
//   }

//   class Queue {
//     constructor(values) {
//       this.values = values;
//     }
//     next() {
//       let newVal = this.values.shift();
//       this.values.push(newVal);
//       return newVal;
//     }
//   }
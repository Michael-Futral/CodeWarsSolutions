// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21

//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8
// Task
// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

// Input / Output
// The str input string consists of lowercase characters only.
// The key input number is a positive integer.

// Example
// Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
// Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
// Digital cypher series
// Digital cypher vol 1
// Digital cypher vol 2
// Digital cypher vol 3 - missing key



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
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (let char of str) { //char of str iterates through the array and returns each element. char in str would return each index
        if (vowels.includes(char)) { //checking if the vowels array includes a,e,i,o,u for the specific index in the str array
            vowelsCount++ //if the vowel is located the counter increases by 1
        }
    }
    return vowelsCount;
}

  //or

//   function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }
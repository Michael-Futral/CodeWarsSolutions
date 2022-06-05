// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
    //your code here
    let isFriend = []

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            isFriend.push(friends[i])
            console.log(isFriend)
        }
    }
    return isFriend
}

friend(["Ryan", "Kieran", "Mark"])

//OR

// function friend(friends){
//     return friends.filter(n => n.length === 4)
//   }

//OR

// function friend(friends){
//     return friends.filter(function (name){
//         return name.length == 4;
//     });
// }
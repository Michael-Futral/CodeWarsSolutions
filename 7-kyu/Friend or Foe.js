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
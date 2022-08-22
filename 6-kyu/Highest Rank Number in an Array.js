function highestRank(arr) {

    var hash = {};

    for (let i = 0; i < arr.length; i++) {

        if (hash[arr[i]]) { hash[arr[i]]++; }
        else { hash[arr[i]] = 1; }
    }

    var countMax = 0;
    var valueMax = 0;

    for (element in hash) {
        if (countMax <= hash[element]) {
            valueMax = Math.max(element, valueMax)
            countMax = Math.max(hash[element], countMax)
        }
    }
    return valueMax
}
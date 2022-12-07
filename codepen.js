 var numJewelsInStones = function(jewels, stones) {

    let stonesIncluded = '';
    let stoneCount = 0

    for(let i = 0; i < jewels.length; i++){
        if(stones.includes(jewels[i])){
            stonesIncluded += jewels[i]
        }

        let result = [...stones].filter(el => el == stonesIncluded[i]).length
        stoneCount += result
    }
    return stoneCount

    // let count = 0;

    // [...jewels].map(el=> stones.includes(el) ? count += [...stones].filter(el => el == stonesIncluded[i]).length : '')
};

console.log(numJewelsInStones("aA",'aaAAAbbb'))
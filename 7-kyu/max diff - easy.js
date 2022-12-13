function maxDiff(list) {

    if(list.length <= 1) return 0

    let maxNum = Math.max(...list),
        minNum = Math.min(...list)

    return maxNum - minNum
  };
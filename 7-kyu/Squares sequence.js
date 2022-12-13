function squares(x, n) {

    if(n < 1) return [];

    let newArr = [],
        sqrNum = x

    while(n > 0){
      newArr.push(sqrNum)
      sqrNum = sqrNum ** 2
      n--
    };

    return newArr
  };
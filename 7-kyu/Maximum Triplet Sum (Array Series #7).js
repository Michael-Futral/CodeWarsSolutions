function maxTriSum(numbers){

    return [...new Set(numbers)].sort((a,b)=>b-a)
                                .slice(0,3)
                                .reduce((acc, val)=> acc += val, 0)
  }
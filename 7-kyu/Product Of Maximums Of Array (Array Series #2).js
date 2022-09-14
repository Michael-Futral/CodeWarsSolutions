function maxProduct(numbers, size){
    return numbers.sort((min,max)=>max-min)
                  .slice(0, size)
                  .reduce((product, value)=> product * value, 1)
  }
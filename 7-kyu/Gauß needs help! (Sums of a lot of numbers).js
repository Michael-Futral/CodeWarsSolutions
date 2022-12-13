function f(n){

    if(n%1!=0 || n<=0 || typeof(n) != 'number') return false

    let sum = 0

    while( n > 0){
      sum += n
      n--
    }

    return sum
  };
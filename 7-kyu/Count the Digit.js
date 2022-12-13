function nbDig(num, digit) {

    if(num == 0) return 0;

    let numCount = 0,
        currNum = 0

    for(let i=0; i<=num; i++){

      currNum = i**2;

      if(currNum.toString().indexOf(digit) > -1){
          numCount += currNum.toString().split(digit.toString()).length-1
         };
    }
    return numCount;
  }
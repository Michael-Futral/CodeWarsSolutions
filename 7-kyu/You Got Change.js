function giveChange(amount) {

    let bills = [0,0,0,0,0,0]

    if(amount == 0) return bills

    for(let total=amount, removed=0; total>=0; total-=removed){

      //$100
      if(total >= 100){
        bills[5]++;
        removed = 100;
        continue;}

      //$50
      if(total >= 50){
        bills[4]++;
        removed = 50;
        continue;}

      //$20
      if(total >= 20){
        bills[3]++;
        removed  =  20;
        continue;}

      //$10
      if(total >= 10){
        bills[2]++;
        removed = 10;
        continue;}

      //$5
      if(total >= 5){
        bills[1]++;
        removed = 5;
        continue;}

      //$1
      if(total >= 1){
        bills[0]++;
        removed = 1;
        continue;}
    }
    return bills
  }
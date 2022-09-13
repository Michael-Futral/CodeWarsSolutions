function isVow(arr){
    for(let i=0; i<arr.length; i++){
      if(arr[i] == 97)  {arr[i] = 'a'; continue;}
      if(arr[i] == 101) {arr[i] = 'e'; continue;}
      if(arr[i] == 105) {arr[i] = 'i'; continue;}
      if(arr[i] == 111) {arr[i] = 'o'; continue;}
      if(arr[i] == 117) {arr[i] = 'u'; continue;}
    }
    return arr
  }
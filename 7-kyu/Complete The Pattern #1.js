function pattern(n){

    if(n<1) return '';

    var output="";

    for(let i=1; i<=n; i++){
      if(i<n){
        output += `${i.toString().repeat(i)}\n`;
      }
      else{
        output += `${i.toString().repeat(i)}`
      };
    };
   return output;
  }
// function gap(g, m, n) {

//   let primeList = []

//   for(let i=m, j=m+g; i <= n; i++, j++){
//     if(i%2!==0 && j%2!==0){
//       primeList.push(i);
//       primeList.push(j);
//     }
//     console.log(primeList)
//   }
//   return primeList
// }


function gap(g, m, n) {
    var lastPrime = 0;
    var isPrime = function (x) {
        for (var i = 2; i * i <= x; i++) { if (x % i == 0) return false; } return true;
    }

    for (var i = m; i <= n; i++)
        if (isPrime(i)) {
            if (i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }

    return null;
}
function findOdd(A) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
      obj[A[i]] = (obj[A[i]] || 0) + 1;
    }
    for (let key in obj) {
      if (obj[key] % 2 !== 0) {
        return Number(key);
      }
    }
  }
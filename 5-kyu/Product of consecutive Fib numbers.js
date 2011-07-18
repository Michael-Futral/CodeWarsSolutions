function productFib(prod, n1, n2) {

    //set n1 and n2 values on start since they will be 'undefined' initially
    n1 = n1 || 0
    n2 = n2 || n1 + 1

    //check when Fibonacci pair is found and return pair and if it is true / false
    if (n1 * n2 >= prod) return [n1, n2, n1 * n2 === prod]

    //begin recursive loop
    return productFib(prod, n1 + n2 - n1, n1 + n2);
}
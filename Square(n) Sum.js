function squareSum(numbers) {
    //   //create an array that holds the squaares
    //   const sumArray = []
    //   //loop through the numbers
    //   numbers.foreach(number){
    //     //while looping through the numbers square each number
    //     //pass squared numbers into the variable array
    //     sumArray = Math.pow(numbers[i])
    //   }
    //   let result = sumArray.reduce((a, b) => a + b, 0)
    //   //following loop sum array

    //   //return the sum of array
    //   return result

    return numbers.reduce((a, x) => a + (x * x), 0)
}
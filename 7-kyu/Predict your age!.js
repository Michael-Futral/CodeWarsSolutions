function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {

    let ageArr = [age1, age2, age3, age4, age5, age6, age7, age8]
    let ageArrTotal = ageArr.reduce((pre, curr) => pre + curr * curr, 0)

    return Math.floor(Math.sqrt(ageArrTotal) / 2)
}
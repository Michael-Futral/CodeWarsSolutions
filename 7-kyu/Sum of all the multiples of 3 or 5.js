function findSum(n) {
    if (n < 3) return 0
    return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n - 1) : findSum(n - 1)
}

//or

function findSum(n) {
    let answer = 0

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0) { answer += i }
    }
    return answer
}
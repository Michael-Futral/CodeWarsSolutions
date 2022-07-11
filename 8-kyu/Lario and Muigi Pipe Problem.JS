function pipeFix(numbers) {
    let answer = []
    numbers.sort((a, b) => b - a)

    for (let i = numbers[numbers.length - 1]; i <= numbers[0]; i++) {
        answer.push(i)
    }
    return answer
}
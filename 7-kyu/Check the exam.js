function checkExam(array1, array2) {
    let score = []

    for (let i = 0; i < array1.length; i++) {
        array1[i] == array2[i]
            ? score.push(4)
            : array2[i] == 0
                ? score.push(0)
                : score.push(-1)
    }

    let grade = score.reduce((pre, curr) => pre + curr)

    return grade > 0 ? grade : 0
}
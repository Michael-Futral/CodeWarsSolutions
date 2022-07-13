function sumDigits(number) {
    return Array
        .from(String(Math
            .abs(number)), Number)
        .reduce((pre, curr) => pre + curr)
}
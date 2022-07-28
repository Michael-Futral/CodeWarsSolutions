function divCon(x) {
    let nums = [],
        char = []

    x.map(el => typeof (el) == 'string' ? char.push(Number(el)) : nums.push(el))

    return nums.reduce((p, c) => p + c, 0) - char.reduce((p, c) => p + c, 0)
}
var findAverage = function (nums) {
    return nums.reduce((pre, curr) => pre + curr, 0) / nums.length
}
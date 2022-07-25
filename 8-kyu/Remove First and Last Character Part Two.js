function array(arr) {
    if (arr == '' || arr.split(',').length <= 2) return null
    return arr.split(',').slice(1, -1).join(' ')
}
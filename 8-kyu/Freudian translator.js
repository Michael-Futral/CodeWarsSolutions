function toFreud(string) {
    let newStr = string.split(' ')
    return string == '' ? string : newStr.fill('sex', 0, newStr.length).join(' ')
}
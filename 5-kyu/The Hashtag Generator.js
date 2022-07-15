function generateHashtag(str) {
    if (str.trim() == "" || str.split(' ').join('').length + 1 > 140) return false

    let strArr = str
        .split(' ')
        .map(el => el.charAt(0).toUpperCase() + el.slice(1))
        .join('')

    return `#${strArr}`
}
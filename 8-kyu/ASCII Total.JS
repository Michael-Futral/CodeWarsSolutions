function uniTotal(string) {
    return [...string].reduce((sum, char, idx) => sum += string.charCodeAt(idx), 0)
}
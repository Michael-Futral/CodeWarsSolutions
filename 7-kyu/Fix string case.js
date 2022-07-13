function solve(s) {

    let lowerScore = 0
    let upperScore = 0

    for (let i = 0; i < s.length; i++) {
        s[i] == s.toUpperCase()[i] ? upperScore += 1 : lowerScore += 1
    }

    return lowerScore >= upperScore ? s.toLowerCase() : s.toUpperCase()
}
function rowWeights(array) {

    let team1 = 0
    let team2 = 0

    array.map((el, idx) => idx % 2 !== 0 ? team2 += el : team1 += el)

    return [team1, team2]
}
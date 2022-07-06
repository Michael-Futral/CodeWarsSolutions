function outed(meet, boss) {

    meet[boss] = meet[boss] * 2
    let objAverage = Object.values(meet).reduce((a, b) => a + b, 0) / Object.values(meet).length

    return objAverage <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

//OR

function outed(meet, boss) {
    meet[boss] = meet[boss] * 2
    return (Object.values(meet).reduce((a, b) => a + b, 0) / Object.values(meet).length) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
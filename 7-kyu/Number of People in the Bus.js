var number = function (busStops) {
    // Good Luck!

    let totalPpl = 0

    for (let i = 0; i < busStops.length; i++) {
        let currStop = busStops[i]
        let getOn = currStop[0]
        let getOff = currStop[1]

        totalPpl += getOn;
        totalPpl -= getOff;
    }
    return totalPpl;
}

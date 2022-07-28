function gps(s, x) {

    let result = 0
    if (x <= 1) {
        return 0
    }

    for (let i = 0; i < x.length - 1; i++) {
        let speed = 3600 * (x[i + 1] - x[i]) / s

        if (speed > result) {
            result = speed
        }
    }

    return result
}
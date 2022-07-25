function racePodium(blocks) {

    let firstPlace = Math.ceil(blocks / 3) + 1,
        secondPlace = firstPlace - 1,
        thirdPlace = blocks - (firstPlace + secondPlace)

    if (thirdPlace == 0) { thirdPlace++; secondPlace-- }

    return [secondPlace, firstPlace, thirdPlace]
}


function alphabetWar(fight) {

    let fightArr = fight.toLowerCase(),
        rightScore = 0,
        leftScore = 0

    for (let i = 0; i <= fightArr.length - 1; i++) {

        switch (fightArr[i]) {
            case 'w': { leftScore += 4; continue; }
            case 'p': { leftScore += 3; continue; }
            case 'b': { leftScore += 2; continue; }
            case 's': { leftScore += 1; continue; }

            case 'm': { rightScore += 4; continue; }
            case 'q': { rightScore += 3; continue; }
            case 'd': { rightScore += 2; continue; }
            case 'z': { rightScore += 1; continue; }
            default: { continue; }
        }
    }
    return rightScore == leftScore ? "Let's fight again!" : `${rightScore > leftScore ? "Right" : "Left"} side wins!`
}
function chromosomeCheck(sperm) {
    return sperm == 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

//OR

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}
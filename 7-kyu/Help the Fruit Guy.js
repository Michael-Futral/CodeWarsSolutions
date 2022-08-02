function removeRotten(bagOfFruits) {

    if (bagOfFruits == null) return []

    let result = bagOfFruits
        .map(el => el.includes('rotten') ? el.split('')
            .slice(6)
            .join('')
            .toLowerCase() : el)
    return result
}
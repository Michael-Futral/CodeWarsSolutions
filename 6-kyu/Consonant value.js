function solve(s) {

    let score = 0,
        check = 0,
        filtered = s.replace(/[aeiou]/g, " ").split(' '),
        alphabet = "-abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i <= filtered.length - 1; i++) {

        let idxSplit = filtered[i].split('')

        for (let j = 0; j <= idxSplit.length - 1; j++) {
            check += alphabet.indexOf(idxSplit[j])
        }

        score > check ? score = score : score = check
        check = 0
    }

    return score
};
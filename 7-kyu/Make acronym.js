const toAcronym = (inp) => inp.split(' ')
    .reduce((acronym, word) => acronym += word[0], '')
    .toUpperCase()
function capitalize(s) {

    let S = s.toUpperCase().split('')
    let odd = s.split('')
    let even = s.split('')

    for (let i = 0; i <= s.length - 1; i++) {
        i == 0 || i % 2 == 0 ? odd[i] = S[i] : even[i] = S[i]
    }
    return [odd.join(''), even.join('')];
};

//OR

function capitalize(s) {

    let sToCap = s.toUpperCase().split('')
    let sOddToCap = s.split('')
    let sEvenToCap = s.split('')

    for (let i = 0; i <= s.length - 1; i++) {
        i == 0 || i % 2 == 0 ? sOddToCap[i] = sToCap[i] : sEvenToCap[i] = sToCap[i]
    }
    return [sOddToCap.join(''), sEvenToCap.join('')];
};
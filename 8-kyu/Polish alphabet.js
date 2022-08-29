var charConvert = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z'
}

function correctPolishLetters(string) {
    return [...string].map(el => {
        if (el in charConvert) { el = charConvert[el]; }
        return el
    }
    ).join('')
}
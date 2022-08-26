function alternateCase(s) {
    return s.split('')
        .map(el => el == el.toLowerCase()
            ?
            el.toUpperCase()
            :
            el.toLowerCase())
        .join('');
}
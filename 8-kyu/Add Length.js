function addLength(str) {
    return str.split(' ').reduce((newArr, word) => {
        newArr.push(`${word} ${word.length}`);
        return newArr;
    }, [])
}
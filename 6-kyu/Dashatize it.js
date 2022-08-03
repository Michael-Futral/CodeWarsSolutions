function dashatize(num) {

    if (num === null) return 'NaN'

    return (Math.abs(num).toString().split('').map((n, i, a) => {

        let isFirstLetter = i == 0,
            isOdd = Boolean(+n % 2),
            isPrevOdd = Boolean(+a[i - 1] % 2)

        return isFirstLetter ? n : (isOdd || isPrevOdd ? `-${n}` : `${n}`);

    }).join(''));
}
function game(n, m) {
    if (m === 2) return 'second';
    if (n % 2 !== 0 && m % 2 === 0) return 'first';
    if (n % 2 !== 0) return 'first';

    return 'second';
}
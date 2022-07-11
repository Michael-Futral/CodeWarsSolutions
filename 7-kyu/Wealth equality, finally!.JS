function redistributeWealth(wealth) {
    let wealthPerPerson = (wealth.reduce((pre, curr) => pre + curr, 0)) / wealth.length
    for (var i = 0; i < wealth.length; i++) {
        wealth[i] = wealthPerPerson;
    }
}
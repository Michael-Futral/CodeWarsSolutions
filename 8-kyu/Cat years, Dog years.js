var humanYearsCatYearsDogYears = function (humanYrs) {

    switch (true) {
        case humanYrs < 2:
            return [humanYrs, 15, 15]
        case humanYrs == 2:
            return [humanYrs, 24, 24]
        case humanYrs > 2:
            return [humanYrs, 24 + ((humanYrs - 2) * 4), 24 + ((humanYrs - 2) * 5)]
        default:
            return "Need human years"
    }
}
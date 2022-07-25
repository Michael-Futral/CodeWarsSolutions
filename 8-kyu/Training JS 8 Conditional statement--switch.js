function howManydays(month) {

    switch (month) {
        case 2: return 28
    }

    let type31 = [1, 3, 5, 7, 8, 10, 12],
        type30 = [4, 6, 9, 11]

    return type31.includes(month) ? 31 : 30
}
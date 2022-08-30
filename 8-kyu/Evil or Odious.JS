function evil(num) {

    let count = 0
    let decNum = (num >>> 0).toString(2)
    let oneCount = [...decNum].map(el => el == 1 ? count++ : count)

    return count % 2 == 0 ? "It's Evil!" : "It's Odious!"
}
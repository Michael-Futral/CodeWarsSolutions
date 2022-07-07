function choreAssignment(chores) {

    chores.sort((a, b) => a - b);
    const condition = (chores.length / 2);
    const result = [];

    for (let i = 0; i < condition; i++) {
        result.push(chores.splice(0, 1)[0] + chores.pop());
    }
    return result.sort((a, b) => a - b);
}
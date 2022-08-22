function generateShape(int) {

    let block = '+'.repeat(int)
    let shape = ''

    for (let i = 1; i <= int; i++) {
        shape += block;
        if (i < int) { shape += '\n' };
    }

    return shape
}
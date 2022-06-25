function expressionMatter(a, b, c) {
    let output = [];
    output.push(a * (b + c));
    output.push(a * b * c);
    output.push(a + b * c);
    output.push((a + b) * c);
    output.push(a + b + c);
    return Math.max(...output);
}
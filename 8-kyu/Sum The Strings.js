function sumStr(a, b) {
    let num1 = a == '' ? 0 : a
    let num2 = b == '' ? 0 : b
    return (parseInt(num1) + parseInt(num2)).toString()
}
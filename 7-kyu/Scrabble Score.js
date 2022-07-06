function scrabbleScore(str) {

    if (str == 0) return 0

    let strUpper = str.toUpperCase().split(' ').join('')

    let val1 = strUpper.replace(/[^A,E,I,O,U,L,N,R,S,T]/g, "")
    let val2 = strUpper.replace(/[^D,G]/g, "")
    let val3 = strUpper.replace(/[^B,C,M,P]/g, "")
    let val4 = strUpper.replace(/[^F,H,V,W,Y]/g, "")
    let val5 = strUpper.replace(/[^K]/g, "")
    let val8 = strUpper.replace(/[^J,X]/g, "")
    let val10 = strUpper.replace(/[^Q,Z]/g, "")

    return val1.length * 1 + val2.length * 2 + val3.length * 3 + val4.length * 4 + val5.length * 5 + val8.length * 8 + val10.length * 10
}
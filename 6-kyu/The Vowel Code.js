function encode(string) {

    let newStr = string.split('')

    for (let i = 0; i < newStr.length; i++) {
        switch (true) {
            case newStr[i] == 'a': newStr[i] = '1'; continue;
            case newStr[i] == 'e': newStr[i] = '2'; continue;
            case newStr[i] == 'i': newStr[i] = '3'; continue;
            case newStr[i] == 'o': newStr[i] = '4'; continue;
            case newStr[i] == 'u': newStr[i] = '5'; continue;
            default: continue;
        }
    }
    return newStr.join('')
}

function decode(string) {

    let newStr = string.split('')

    for (let i = 0; i < newStr.length; i++) {
        switch (true) {
            case newStr[i] == '1': newStr[i] = 'a'; continue;
            case newStr[i] == '2': newStr[i] = 'e'; continue;
            case newStr[i] == '3': newStr[i] = 'i'; continue;
            case newStr[i] == '4': newStr[i] = 'o'; continue;
            case newStr[i] == '5': newStr[i] = 'u'; continue;
            default: continue;
        }
    }
    return newStr.join('')
}
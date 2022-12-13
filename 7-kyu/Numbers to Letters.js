function switcher(x){

    let alphabet = 'zyxwvutsrqponmlkjihgfedcba!? '

    return x.reduce((word, char) => word += alphabet[char-1], '')
  }
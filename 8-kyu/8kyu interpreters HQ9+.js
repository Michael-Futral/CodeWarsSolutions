function HQ9(code) {
    if(code === 'H') return 'Hello World!'
    if(code === 'Q') return code
    if(code === '9') return sing()
    return undefined
  }

function sing(){

    let songLyrics = ''

    for (let i = 99, j = i; i > 0; i--) {
        if (i > 1) {
            songLyrics += (`${i} bottles of beer on the wall, ${i} bottles of beer.\n`);
            songLyrics += (`Take one down and pass it around, ${i - 1} ${i - 1 == 1 ? 'bottle' : 'bottles'} of beer on the wall.\n`);
            continue;
        }
        if (i == 1) {
            songLyrics += (`${i} bottle of beer on the wall, ${i} bottle of beer.\n`)
            songLyrics += (`Take one down and pass it around, no more bottles of beer on the wall.\n`)
            songLyrics += (`No more bottles of beer on the wall, no more bottles of beer.\n`)
            songLyrics += (`Go to the store and buy some more, ${j} bottles of beer on the wall.`)
        }

    return songLyrics
    }
}
var sing = () => {

    let songLyrics = []

    for (let i = 99, j = i; i > 0; i--) {

        if (i > 1) {
            songLyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
            songLyrics.push(`Take one down and pass it around, ${i - 1} ${i - 1 == 1 ? 'bottle' : 'bottles'} of beer on the wall.`);
            continue;
        }

        if (i == 1) {
            songLyrics.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`)
            songLyrics.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
            songLyrics.push(`No more bottles of beer on the wall, no more bottles of beer.`)
            songLyrics.push(`Go to the store and buy some more, ${j} bottles of beer on the wall.`)
        }
    }

    return songLyrics
};
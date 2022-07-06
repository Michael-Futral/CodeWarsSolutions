function warnTheSheep(queue) {

    if (queue[queue.length - 1] == 'wolf') return (
        "Pls go away and stop eating my sheep"
    )

    let wolfIdx = queue.length - 1 - queue.indexOf('wolf')

    return `Oi! Sheep number ${wolfIdx}! You are about to be eaten by a wolf!`
}
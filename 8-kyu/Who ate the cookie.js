function cookie(type) {

    let name = ''

    switch (typeof type) {
        case 'string':
            name = 'Zach';
            break;
        case 'number':
            name = 'Monica';
            break;
        default: name = 'the dog'
    }

    return `Who ate the last cookie? It was ${name}!`
}
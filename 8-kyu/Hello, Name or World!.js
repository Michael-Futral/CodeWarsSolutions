function hello(name) {

    if (name == undefined || name == '') return 'Hello, World!'

    let newName = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)

    return `Hello, ${newName}!`
}
const helloWorld = () => {

    let SayHello = {
        H: "W",
        e: "o",
        L: "r",
        l: "l",
        O: "d"
    }

    let sayHello = Object.keys(SayHello).join('').toLowerCase()
    let sayWorld = Object.values(SayHello).join('')

    let capHello = sayHello.charAt(0)
    let lowEllo = sayHello.slice(1)
    let newHello = capHello.toUpperCase() + lowEllo

    let str = `${newHello} ${sayWorld}!`

    console.log(str)
}
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {

    let chaseSpeed = dolphin == true ? sharkSpeed / 2 : sharkSpeed
    let yourTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / chaseSpeed

    return yourTime < sharkTime ? "Alive!" : "Shark Bait!"
}
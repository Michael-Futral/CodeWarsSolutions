const peopleWithAgeDrink = (old) =>

    old < 14 ? "drink toddy" :
        old < 18 ? "drink coke" :
            old < 21 ? "drink beer" : "drink whisky"


//OR

function peopleWithAgeDrink(old) {

    if (old < 14) return "drink toddy"
    if (old < 18) return "drink coke"
    if (old < 21) return "drink beer"
    if (old >= 21) return "drink whisky"

};
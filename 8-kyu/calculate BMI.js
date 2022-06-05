// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(w, h) {
    let size = w / (h ** 2)

    if (size <= 18.5) {
        return "Underweight"
    } else if (size <= 25.0) {
        return "Normal"
    } else if (size <= 30.0) {
        return "Overweight"
    } else {
        return "Obese"
    }
}
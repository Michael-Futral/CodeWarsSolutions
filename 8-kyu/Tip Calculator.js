function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
        case "terrible": return Math.ceil(amount * 0)
        case "poor": return Math.ceil(amount * .05)
        case "good": return Math.ceil(amount * .10)
        case "great": return Math.ceil(amount * .15)
        case "excellent": return Math.ceil(amount * .20)
        default: return 'Rating not recognised'
    }
}
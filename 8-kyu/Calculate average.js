function find_average(array) {
    if (array.length > 0) {
        let average = array.reduce((a, b) => a + b) / array.length
        return average
    } else {
        return 0;
    }

}
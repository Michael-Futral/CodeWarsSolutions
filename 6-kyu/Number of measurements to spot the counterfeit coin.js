function howManyMeasurements($numCoins) {

    if ($numCoins == 1) return 0;

    return howManyMeasurements(Math.ceil($numCoins / 3)) + 1;
}
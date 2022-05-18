function spinningRings(innerMax, outerMax) {
    for (var i = 1; innerMax - ((i - 1) % (innerMax + 1)) !== i % (outerMax + 1); i++) { }
    return i;
};
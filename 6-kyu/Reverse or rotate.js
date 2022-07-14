function revrot(str, sz) {

    let result = ''

    if (str.length < sz || str.length == 0 || sz == 0) return result

    var cubeNum = Math.floor(str.length / sz)

    for (var i = 0; i < cubeNum; i++) {
        var cube = str.slice(i * sz, (i + 1) * sz);
        var sum = 0;
        for (var j = 0; j < cube.length; j++) {
            sum = parseInt(cube.charAt(j)) + parseInt(sum);
        }
        if (sum % 2 == 0) {
            for (var j = cube.length; j >= 0; j--) {
                result += cube.charAt(j) + '';
            }
        } else {
            var firstCode = cube.split("").splice(0, 1).toString();
            result += cube.split("").splice(1, cube.length).join("") + firstCode;
        }
    }
    return result;
}
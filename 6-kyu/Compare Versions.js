function compareVersions(version1, version2) {

    //return if the same version
    if (version1 == version2) return true

    //create 2 arrays of the two versions
    let v1Arr = version1.split('.').map(Number)
    let v2Arr = version2.split('.').map(Number)

    //determine length of the sortest array
    let smallestArr = Math.min(v1Arr.length, v2Arr.length)

    //Compare only the subversions that can be compared
    for (let i = 0; i < smallestArr; i++) {
        if (v1Arr[i] < v2Arr[i]) return false
        if (v1Arr[i] > v2Arr[i]) return true
    }

    /*if all subversion that can be compared are equal we simply need to
    determine which version has the most subversions (the longest is the newest).
    If v2 is shortest than returning true would mean v1 is newest*/
    return smallestArr == v2Arr.length
}
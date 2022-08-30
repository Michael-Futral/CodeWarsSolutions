function maskify(cc) {
    return cc.length <= 4 ? cc : [...cc].fill('#', 0, cc.length - 4).join('')
}
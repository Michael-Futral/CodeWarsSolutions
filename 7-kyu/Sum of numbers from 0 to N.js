var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {

        if (count == 0) return '0=0'
        if (count < 0) return count + '<0'

        let numStr = '',
            sum = 0

        while (count >= 0) {
            sum += count
            numStr += count + '+';
            count--
        }

        return numStr.split('+').slice(0, -1).reverse().join('+') + ' = ' + sum
    };

    return SequenceSum;

})();
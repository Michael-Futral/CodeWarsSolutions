function dontGiveMeFive(start, end) {
    let answer = 0
    let begin = start

    for (i = begin; i <= end; i++) {
        if (i.toString().indexOf('5') > -1) {
            continue;
        } else {
            answer++
        }
    }
    return answer;
}
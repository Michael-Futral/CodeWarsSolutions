function robberEncode(sentence) {

    let answer = ""

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == 'a' || sentence[i] == 'e' || sentence[i] == 'i' || sentence[i] == 'o' || sentence[i] == 'u' || sentence[i] == ' ') {
            answer += sentence[i]
            console.log(answer)
            continue;
        } else if (sentence.toUpperCase() == sentence) {
            answer += sentence[i] + 'O' + sentence[i]
            console.log(answer)

        } else {
            answer += sentence[i] + 'o' + sentence[i]
        }
    }
    return answer
}

console.log(robberEncode('SOS.O.SOS'))
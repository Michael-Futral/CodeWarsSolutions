function countPositivesSumNegatives(input) {
    if(input == null || input == []) return []
    if(Math.max(input) == 0 && Math.min(input) == 0 ) return []

    let positiveCount = 0
    let negativeCount = 0

    input.map(el => el>0 ? positiveCount++ : el<0 ? negativeCount+=el : '')

    return [positiveCount, negativeCount]
  }
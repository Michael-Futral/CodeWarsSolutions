function getGrade(s1, s2, s3) {

    let avg = (s1 + s2 + s3) / 3

    return avg >= 90 ? 'A'
        : avg >= 80 ? 'B'
            : avg >= 70 ? 'C'
                : avg >= 60 ? 'D'
                    : 'F'
}
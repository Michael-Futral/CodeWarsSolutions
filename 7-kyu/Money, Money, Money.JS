function calculateYears(principal, interest, tax, desired) {
    for (var years = 0; principal < desired; years++) {
        principal += principal * interest * (1 - tax);
    }
    return years;
}

//OR

function calculateYears(principal, interest, tax, desired, year) {

    //set year counter (0 at start or incremented year for each recursive call)
    year = year || 0;

    //end recursive loop when principal is == or > desired $$
    if (principal >= desired) { return year }

    //increase principal from interest and tax calc.
    principal += principal * interest * (1 - tax);

    //recursive loop until returned at if statement above
    return calculateYears(principal, interest, tax, desired, ++year);
}
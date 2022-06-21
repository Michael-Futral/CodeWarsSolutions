// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil) {

    //objects of teams for both good and evil
    //--------------------------------------------------------------
    let teamGood = {
        Hobbits: 1,
        Men: 2,
        Elves: 3,
        Dwarves: 3,
        Eagles: 4,
        Wizards: 10
    }

    let teamEvil = {
        Orcs: 1,
        Men: 2,
        Wargs: 2,
        Goblins: 2,
        Uruk_Hai: 3,
        Trolls: 5,
        Wizards: 10
    }

    //Tuning values from objects for each team into an array
    //--------------------------------------------------------------
    var battleArrayGood = Object.keys(teamGood)
        .map(function (key) {
            return teamGood[key];
        });

    var battleArrayEvil = Object.keys(teamEvil)
        .map(function (key) {
            return teamEvil[key];
        });

    //Setting up the message into variables that will be called for whichever team wins
    //--------------------------------------------------------------
    let evilWins = "Battle Result: Evil eradicates all trace of Good"
    let goodWins = "Battle Result: Good triumphs over Evil"
    let tie = "Battle Result: No victor on this battle field"

    //Calculation of teams powers via stored variables
    //--------------------------------------------------------------
    let goodPower = 0
    let evilPower = 0

    //Create battle array
    //--------------------------------------------------------------
    let newGood = good.split(' ').filter(function (value, index, arr) {
        return value = ' ';
    });
    let newEvil = evil.split(' ').filter(function (value, index, arr) {
        return value = ' ';
    });

    //Count the number of points each group has
    //--------------------------------------------------------------
    for (let i = 0; i < newGood.length; i++) {
        goodPower += (newGood[i] * battleArrayGood[i])
    }

    for (let i = 0; i < newEvil.length; i++) {
        evilPower += (newEvil[i] * battleArrayEvil[i])
    }

    //Determine which team has one and the correct return statement
    //--------------------------------------------------------------
    let battleResult = goodPower > evilPower ? goodWins : goodPower < evilPower ? evilWins : tie

    return battleResult
}
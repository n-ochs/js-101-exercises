/* Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

good -> 20%
fair -> 15%
bad -> 10% */

function tipAmount(billAmount, service) {
    if(service == "good") {
        return billAmount * .2
    }
    else if(service == "fair") {
        return billAmount * .15
    }
    else if(service == "bad") {
        return billAmount * .1
    }
    else {
        return "Incorrect input"
    }
}

console.log(tipAmount(40, "good"))
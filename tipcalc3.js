// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

// this is the base function for the tip amount
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

// this is the splitAmount function
function splitAmount(billAmount, service, peopleCount) {
    if(service == "good") {
        return billAmount * 1.2 / peopleCount
    }
    else if(service == "fair") {
        return billAmount * 1.15 / peopleCount
    }
    else if(service == "bad") {
        return billAmount * 1.1 / peopleCount
    }
    else {
        return "Incorrect input"
    }
}

console.log(splitAmount(40, 'fair', 2))
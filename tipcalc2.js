/* Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task. */

// this function is strictly to get the tip amount
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

// one way of doing a bill amount + tip
function totalAmount(billAmount, service) {
    return tipAmount(billAmount, service) + billAmount
}

console.log(totalAmount(40, "good"))


// another way of doing a bill amount + tip
function totalAmount2(billAmount, service) {
    if(service == "good") {
        return billAmount * 1.2
    }
    else if(service == "fair") {
        return billAmount * 1.15
    }
    else if(service == "bad") {
        return billAmount * 1.1
    }
    else {
        return "Incorrect input"
    }
}

console.log(totalAmount2(40, "good"))
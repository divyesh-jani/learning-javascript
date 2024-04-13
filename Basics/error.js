
function withdrawMoney(amount) {
    let balance = 1000;
    if (typeof(amount) !== 'number') {
        throw new Error("Please enter a number. How do you withdraw " + amount); // Throws error and execution stops here
    } else if (amount > balance) {
        throw new Error("You don't have $" + amount); // Throws error and execution stops here
    } else {
        console.log("withdrew $" + amount + ", remaining balance is $" + (balance - amount));
    }
}

[380, 400.5, true, 'a', 1001].forEach(a => withdrawMoney(a));

function tryCatchFinallyUsage(amount) {
    let balance = 1000;
    try {
        if (typeof(amount) !== 'number') {
            throw new Error("Please enter a number. How do you withdraw " + amount); // Throws error but execution doesn't stop
        } else if (amount > balance) {
            throw new Error("You don't have $" + amount); // Throws error but execution doesn't stop
        } else {
            console.log("withdrew $" + amount + ", remaining balance is $" + (balance - amount));
        }
    } catch (e) {
        // console.log(e);
        console.log("Try again, and this time enter a valid amount!")
    } finally {
        console.log("Hope you got the money you wanted.");
    }
}

[380, 400.5, true, 'a', 1001].forEach(a => tryCatchFinallyUsage(a));

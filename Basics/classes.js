
class BankAccount {
    // let accountObj = new BankAccount('Jani', 1000);
    constructor(name, amount) {
        this.customerName = name;
        this.accountBalance = amount;
        this.accountActive = true;
        console.log('Account created for ' + name + ' and deposited $' + amount);
    };

    // accountObj.depositMoney(100);
    depositMoney(amount) {
        if (this._isAccountActive('deposit money')) {
            this.accountBalance = this.accountBalance + amount;
            console.log('Added $' + amount + ', updated balance is $' + this.accountBalance);
        }
    };

    // accountObj.withdrawMoney(50);
    withdrawMoney(amount) {
        if (this._isAccountActive('withdraw money')) {
            if (this.accountBalance >= amount) {
                this.accountBalance = this.accountBalance - amount;
                console.log('Withdrew $' + amount + ', updated balance is $' + this.accountBalance);
            } else {
                console.log('You do not have enough balance to withdraw $' + amount);
            }
        }
    };

    // accountObj.accountStatus;
    get accountStatus() {
        return this.accountActive;
    };

    // accountObj.accountStatus = false;
    set accountStatus(value) {
        this.accountActive = value;
        console.log(this.accountActive);
    };

    // accountObj.getAccountStatus();
    getAccountStatus() {
        return this.accountActive;
    };

    // accountObj.activateAccount();
    activateAccount() {
        this.accountActive = true;
        console.log('Account activated');
    };

    // accountObj.deActivateAccount();
    deActivateAccount() {
        this.accountActive = false;
        console.log('Account deactivated!');
    };

    // Private function
    _isAccountActive(operation) {
        if (!this.accountActive) {
            console.log('You must activate account before you can ' + operation + '!');
            return false;
        }
        return true;
    };

    // BankAccount.bankName;
    static get bankName() {
        return 'Amex';
    };

    // BankAccount.bankName = 'BofA';
    static set bankName(name) {
        console.log(name);
    };

    // BankAccount.getAccountCopyright();
    static getAccountCopyright() {
        return 'All rights reserved!';
    }

    // accountObj.createBabyAccount('Child', 500);
    createBabyAccount(babyName, amount) {
        return new BankAccount(this.customerName + '-' + babyName, amount);
    }
};

let myAccount = new BankAccount('Jani', 1000);          // Account created for Jani and deposited $1000
let yourAccount = new BankAccount('Thaker', 2000);      // Account created for Thaker and deposited $2000
myAccount.depositMoney(200);                            // Added $200, updated balance is $1200
myAccount.withdrawMoney(500);                           // Withdrew $500, updated balance is $700
console.log(myAccount.accountStatus);                   // true
myAccount.accountStatus = false;                        // false
myAccount.depositMoney(200);                            // You must activate account before you can deposit money!
yourAccount.depositMoney(200);                          // Added $200, updated balance is $2200
myAccount.withdrawMoney(500);                           // You must activate account before you can withdraw money!
myAccount.activateAccount();                            // Account activated!
myAccount.withdrawMoney(1000);                          // You do not have enough balance to withdraw $1000
yourAccount.withdrawMoney(1000);                        // Withdrew $1000, updated balance is $1200
myAccount.withdrawMoney(700);                           // Withdrew $700, updated balance is $0
myAccount.deActivateAccount();                          // Account deactivated!
console.log(myAccount.getAccountStatus());              // false
myAccount.accountStatus = true;                         // true
console.log(BankAccount.bankName);                      // Amex
BankAccount.bankName = 'BofA';                          // BofA
console.log(BankAccount.getAccountCopyright());         // All rights reserved!
let childAccount = myAccount.createBabyAccount('Child', 500);   // Account created for Jani-Child and deposited $500
childAccount.withdrawMoney(100);                        // Withdrew $100, updated balance is $400
myAccount.depositMoney(200);                            // Added $200, updated balance is $200

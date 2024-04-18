var accountBank = /** @class */ (function () {
    function accountBank(accountNumber, balance, holder) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.holder = holder;
    }
    accountBank.prototype.deposit = function (amount, accountNumber) {
        if (this.accountNumber === accountNumber) {
            if (amount > 0) {
                var deposit = (this.balance += amount);
                console.log("\nLOCOMBIA DEPOSITS\nDeposit succesful: " + amount);
                console.log("New balance: " + this.balance);
            }
            else {
                console.log("\nLOCOMBIA DEPOSITS\nInvalid amount to deposit");
            }
        }
        else {
            console.log("\nLOCOMBIA DEPOSITS\nInvalid account number");
        }
    };
    accountBank.prototype.withdraw = function (amount) {
        if (amount <= 0 || amount > this.balance) {
            console.log("\nLOCOMBIA WITHDRAWS\nInvalid amount to withdraw\nYour balance: ", this.balance);
        }
        else {
            var withdraw = (this.balance -= amount);
            console.log("\nLOCOMBIA WITHDRAWS\nWithdraw: " + amount);
            console.log("New balance: " + withdraw);
        }
    };
    accountBank.prototype.consult = function () {
        console.log("\nYOUR ACCOUNT\nHolder: ", this.holder);
        console.log("Balance: ", this.balance);
    };
    return accountBank;
}());
var accountOne = new accountBank(123456789, 1000, "Samuel");
accountOne.deposit(5000, 123456789);
accountOne.withdraw(2000);
accountOne.consult();
var accountTwo = new accountBank(1027801700, 2000, "Sofia");
accountTwo.deposit(5000, 123456789);
accountTwo.withdraw(8000);
accountTwo.consult();

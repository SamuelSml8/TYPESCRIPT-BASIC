// 2. Diseñar una clase para representar una cuenta bancaria:
// a. La clase debe tener propiedades para el número de cuenta, el saldo y el
// nombre del titular.
// b. Definir métodos para depositar, retirar y consultar el saldo de la cuenta.
// c. Crear dos objetos de cuenta bancaria diferentes y realizar operaciones
// sobre ellos.

class accountBank {
  accountNumber: number;
  balance: number;
  holder: string;

  constructor(accountNumber: number, balance: number, holder: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.holder = holder;
  }

  deposit(amount: number, accountNumber: number) {
    if (this.accountNumber === accountNumber) {
      if (amount > 0) {
        const deposit = (this.balance += amount);
        console.log("\nLOCOMBIA DEPOSITS\nDeposit succesful: " + amount);
        console.log("New balance: " + this.balance);
      } else {
        console.log("\nLOCOMBIA DEPOSITS\nInvalid amount to deposit");
      }
    } else {
      console.log("\nLOCOMBIA DEPOSITS\nInvalid account number");
    }
  }

  withdraw(amount: number) {
    if (amount <= 0 || amount > this.balance) {
      console.log(
        "\nLOCOMBIA WITHDRAWS\nInvalid amount to withdraw\nYour balance: ",
        this.balance
      );
    } else {
      const withdraw = (this.balance -= amount);
      console.log("\nLOCOMBIA WITHDRAWS\nWithdraw: " + amount);
      console.log("New balance: " + withdraw);
    }
  }

  consult() {
    console.log("\nYOUR ACCOUNT\nHolder: ", this.holder);
    console.log("Balance: ", this.balance);
  }
}

const accountOne = new accountBank(123456789, 1000, "Samuel");
accountOne.deposit(5000, 123456789);
accountOne.withdraw(2000);
accountOne.consult();

const accountTwo = new accountBank(1027801700, 2000, "Sofia");
accountTwo.deposit(5000, 123456789);
accountTwo.withdraw(8000);
accountTwo.consult();

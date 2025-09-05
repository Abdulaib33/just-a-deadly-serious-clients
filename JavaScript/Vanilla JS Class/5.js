// <!-- 14. Create a BankAccount class with a private field #balance. -->


class BankAccount {
    // Truly private field
    #balance = 0; // Private field

    constructor(start) {
        this.#balance = start
    }

    // Getter: read-only access to #balance
    get balance() {
        return this.#balance;
    }

    // Deposit method
    deposit(amount){
        if (amount > 0){
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`)

        } else {
            console.log("❌ Deposit must be positive number")
        }
    }

    // Withdraw method
    withdraw(amount){
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdraw ${amount}. New balance: ${this.#balance}`)

        } else {
            console.log("❌ Invalid withdraw amount or insufficient funds.")
        }
    }


}

const account = new BankAccount(100);

console.log(account.balance)

// <!-- 15. Add methods deposit(amount) and withdraw(amount).-->

account.deposit(50); // Output: Deposited 50. New balance: 150
console.log(account.balance)

account.withdraw(30); // Output: Withdraw 30. New balance: 120
console.log(account.balance)

// <!-- 16. Add a getter balance to check balance safely.  -->

console.log(account.balance); // Output: 120

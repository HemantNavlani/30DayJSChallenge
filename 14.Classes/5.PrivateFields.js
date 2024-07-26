// Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account{
    #balance;
    constructor(initialBalance){
        this.#balance = initialBalance
    }
    deposit(amount){
        if (amount>=0){
            this.#balance+=amount;
            return `Amount Deposited : ${amount} New Balance : ${this.#balance}`
        }
        else {
            return "Invalid amount"
        }
    }
    withdraw(amount){
        if (amount>0 && amount <=this.#balance){
            this.#balance-=amount;
            return `Withdrawn amount ${amount} : New Balance : ${this.#balance}`
        }
        else if (amount>this.#balance){
            return `Insufficient Funds`
        }
        else {
            return "Invalid amount"
        }
    }
    getBalance(){
        return this.#balance
    }
}
const acc = new Account(1000)
console.log(acc.deposit(200));
console.log(acc.withdraw(200))
console.log(acc.getBalance())

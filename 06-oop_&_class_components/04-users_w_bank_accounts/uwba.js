class User {
    constructor( username, email ) {
        this.name = username;
        this.email = email;
        this.account = new BankAccount( intRate=0.02, balance=0 );
    };
    makeDeposit( amount ) { this.account.deposit(amount); return this; };
    withdrawl( amount ) { this.account.withdraw(amount); return this; };
    displayBalance() { console.log( `User: ${this.name}, Balance: $${this.account.balance}` ); return this; };
    transferMoney( user, amount ) { this.account.withdrawl(amount); user.account.deposit(amount); };
};

class BankAccount {
    constructor( intRate, balance=0 ) {
        this.intRate = intRate;
        this.balance = balance;
    };
    deposit( amount ) { this.balance += amount; return this; };
    withdraw( amount ) { this.balance -= amount; return this; };
    displayAccountInfo() { console.log( `Interest Rate: ${this.intRate}, Balance: $${this.balance}` ); return this; };
    yieldInterest() { this.balance += this.balance * this.intRate; return this; };
};
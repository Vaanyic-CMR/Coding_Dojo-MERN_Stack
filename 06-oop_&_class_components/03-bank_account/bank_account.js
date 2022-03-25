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

const acc1 = new BankAccount( 0.05 );
const acc2 = new BankAccount( 0.02, 500 );

acc1.deposit(100).deposit(200).deposit(300).withdraw(150).yieldInterest().displayAccountInfo();
acc2.deposit(200).deposit(400).withdraw(50).withdraw(150).withdraw(100).withdraw(200).yieldInterest().displayAccountInfo();
class User {
    constructor( username, email ) {
        this.name = username;
        this.email = email;
        this.accountBalance = 0;
    };
    makeDeposit( amount ) { this.accountBalance += amount; return this; };
    makeWithdrawl( amount ) { this.accountBalance -= amount; return this; };
    displayBalance() { console.log( `User: ${this.name}, Balance: $${this.accountBalance}` ); return this; };
    transferMoney( user, amount ) { this.makeWithdrawl(amount); user.makeDeposit( amount ); };
}

const user1 = new User( "Guido", "g@email.com" )
const user2 = new User( "Anna", "a@email.com" )
const user3 = new User( "Caleb", "c@email.com" )

user1.makeDeposit(50).makeDeposit(200).makeDeposit(300).makeWithdrawl(500).displayBalance();

user2.makeDeposit(50).makeDeposit(200).makeWithdrawl(20).makeWithdrawl(30).displayBalance();

user3.makeDeposit(500).makeWithdrawl(100).makeWithdrawl(150).makeWithdrawl(50).displayBalance();

console.log("-----|BONUS|-----")

user2.transferMoney( user1, 50 );
user1.displayBalance();
user2.displayBalance();
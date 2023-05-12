class BankAccount {
    id: number;
    name: string;
private _balance: number;
    


    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
       

    }
    getBalance(){ 
        console.log(this._balance) //private property only accessable inside class and can't access in outside
    }

    addDeposite( amount: number){
        console.log (this._balance = this._balance + amount);
    }
}

const myAccount = new BankAccount(34, 'mahbub', 345);
console.log(myAccount);
myAccount.addDeposite(34);
myAccount.getBalance()
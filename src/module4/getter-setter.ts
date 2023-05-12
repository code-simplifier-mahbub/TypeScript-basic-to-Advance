class BankAccount {
    id: number;
    name: string;
private _balance: number;
    


    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;

    }

    //get method
    // getBalance(){ 
    //     console.log(this._balance) //private property only accessable inside class and can't access in outside
    // }

    //getter for get private data and now get method not neede
    get balance(): number{  // private property can be access with (get) property
        return this._balance
    }

    // //deposite method
    // addDeposite( amount: number){
    //     console.log (this._balance = this._balance + amount);
    // }
    
    //setter for set private data and now deposite method not needed
    set deposit(amount: number){
         this._balance = this._balance + amount
    }
   
}

const myAccount = new BankAccount(34, 'mahbub', 20);
console.log(myAccount.balance);
// myAccount.addDeposite(34);
// myAccount.getBalance()
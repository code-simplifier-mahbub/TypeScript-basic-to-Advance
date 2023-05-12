class Counter {
    counter: number;

    constructor(counter: number){
        this.counter = counter 
    }
    //increase value
    increament(amount: number){
        this.counter = this.counter + amount
    }
    //decrease value
    decreament(amount: number){
        this.counter = this.counter + amount
    }
}

const instance1 = new Counter(0);
const instance2 = new Counter(1);

instance1.increament(20);
instance2.increament(10);
console.log(instance1)
console.log(instance2)
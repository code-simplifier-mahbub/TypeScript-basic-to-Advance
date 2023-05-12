// //**********************type guard 

// type Alphaneumeric = number | string;
// function add(param1: Alphaneumeric, param2: Alphaneumeric){
//     if(param1 === 'number' && param2 === 'number'){
//        return param1 + param2;
//     }
//     else{
//         param1.toString() + param2.toString()
//     }
// }

// //call function
// add(2, 4); // there will be sum operation
// add('mahbub', 'hasan') // there will be concatinate operation

// //************************In Guard */
// //type declare
// type NormalUserType = {
//     name: string;
// }

// type AdminUserType = {
//     name: string; 
//     role: 'admin'
// }

// //function add for checking user
// function getUser(user: NormalUserType | AdminUserType): string{
//     if("role" in user){
//         return(`I am a ${user.role} user`)
//     }
//     else{
//         return('I am a normal user')
//     }
// }

// const normaluser1: NormalUserType = {name: 'mahbub'}    // akhane object declare kora hoice jetar man function a jabe
// const adminuser1: AdminUserType = {name: "hasan", role: "admin"}  // akhane object declare kora hoice jetar man function a jabe
// //function call
// console.log(getUser(normaluser1));
// console.log(getUser(adminuser1));



// //**********************intaceof guard*********
// //parents class
// class Animal {
//     //parameter type
//     name: string;
//     species: string;

//     //constructor declare
//     constructor(name: string, species: string){
//         this.name = name;
//         this.species = species;
//     }
//     //method 
//     makeSound(){
//         console.log('I am making sound');
//     }
// }

// //child class for dog
// class Dog extends Animal{
    
//     //constructor declare
//     constructor(name: string, species: string){
//         super(name, species) //name and species come from parents class
//     }
//     makeBarK (){ //method for dog if child class not work
//         console.log('I am barking');
//     }
// }

// //child class for cat
// class Cat extends Animal{
    
//     //constructor declare
//     constructor(name: string, species: string){
//         super(name, species) //name and species come from parents class
//     }
//     makeMew(){
//         console.log('I am mewing');
//     }
// }

// function isDog(animal: Animal): animal is Dog{ // bole deua hoice je animal ta hobe dog
//     return animal instanceof Dog
// }
// function isCat(animal: Animal): animal is Cat{ // bole deua hoice je animal ta hobe cat
//     return animal instanceof Cat
// }

// function getAnimal (animal: Animal){
//     if(isDog(animal)){
//         animal.makeBarK();
//     }
//     else if(isCat(animal)){
//         animal.makeMew();
//     }
//     else{
//         animal.makeSound();
//     }
// }

// //create object
// const animal1 = new Dog('tanzil bhai', 'dog');// ata dog class a jabe
// const animal2 = new Cat('Rakib bhai', 'cat'); // ata cat class a jabe

// getAnimal(animal1) //answer I am barking
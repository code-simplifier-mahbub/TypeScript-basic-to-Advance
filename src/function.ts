// //normal function

// function add(num1:number, num2:number){
//     return num1 + num2;
// }
// add(2,2)

// //arrow function
// const addArrow = (num1:number, num2:number):number => num1 + num2;
// addArrow(3,3)


// //default parameter
// function add(num1:number, num2:number = 7){
//     return num1 + num2;
// }
// add(23)


// //call back function
// const arr = [23, 453, 25];
// const newArr = arr.map((elem:number) => elem * elem)


// //with implicit type function
// const person:{
//     //implicit type 
//     name: string,
//     balence:number,
//     addBalence(money:number):void
// } = {
//     name: 'mahbub',
//     balence: 400,
//     addBalence(money:number){
//         console.log(`this is new balence: ${this.balence + money}`) 
//     }
// }

// //spread operator
// const friends = ['rahim', 'karim', 'ismail'];
// const newFirends = ['abu', 'habu', 'labu'];

// friends.push(...newFirends)
// // console.log(friends);

// // // without return value use void
// // function logMessage(message: string): void {
// //     // console.log(message);
// //   }

//   const myFriends = (friends1:string, friends2:string):void =>console.log(`Hi ${friends1}\n Hi ${friends2}`);

//   myFriends('tanzil', 'rakib');


//   const greetFriends = (...friends:string[]):void =>friends.forEach(friend => console.log(`Hi ${friend}`));

//   greetFriends('tanzil', 'rakib', 'motihar');


// //destructuring
//   const peopleName= ['abul', 'kabul', 'babul'];
// //   console.log(peopleName[1]);

//   const familyMember={
//     name: 'Hasan',
//     age: 22
//   }
//   const {name:originlName}=familyMember;
// //   console.log(originlName)
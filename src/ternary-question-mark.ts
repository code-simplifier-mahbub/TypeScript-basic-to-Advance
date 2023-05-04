// //general condition
// const age = 22;
// if(age >= 18){
//     console.log('adult age');
// }
// else{
//     console.log('unadult');
// }

// //ternary operator
// const isAdult = age >= 18 ? 'yes' : 'no'
// // console.log(isAdult)

//nulish coalesnece operator
//only work with null and undefined
const isAuthenticated = 'null';

const userName = isAuthenticated ?? 'guest'
// console.log(userName);

// //another experiment with nullish operator
// type Manush = {
//     name: string,
//     age: number;
//     address: {
//         road: string;
//         city: string;
//         home?: string
//     }
// }

// const manush1:Manush = {
//     name: 'mahbub',
//     age: 32,
//     address: {
//         road: 'brindabon',
//         city: 'uganda',
//     }
// }

// // here i can use nullish operator because nullish can work with null and undefined
// const home = manush1?.address?.home ?? 'no home'
// console.log(home);


// //mcq from module
// function generateAdder(a: number): (b: number) => number {

//     return function(b: number) {
  
//       return a + b;
  
//     };
  
//   }
  
  
  
//   const addTwo = generateAdder(2);
  
//   console.log(addTwo(3));
  
//   console.log(addTwo(5));
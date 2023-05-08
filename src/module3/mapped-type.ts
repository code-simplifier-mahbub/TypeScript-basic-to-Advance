// // start map with basic
// const arrayOfNumber = [2,3,4];
// const getNumbers = arrayOfNumber.map(number=> number.toString());
// console.log(getNumbers)

//***********Now mapped with type
// //example
// const obj = {
//     name: 'mahbub'
// }
// const nameGet = obj['name']
// console.log(nameGet)

// ******// simple work
// type Area = {
//     height: number;
//     width: number;
// }

// type A = Area['height'] //looked up type
// type B = keyof Area // union type. 'height' | 'width'


// ********//similar but organised work  with generic
// type Volume = {
//     height: number;
//     width: number;
//     depth: number;
// }

// // type Area1<Volume> = {
// //     [key in keyof Volume]: Volume[key]
// // }
// // similer Area1 but generic work
// type Area1<T> = {
//    readonly  [key in keyof T]: T[key]
// }

// const area1: Area1<{height: number, width: string}> = {height: 23, width: 'ten'}










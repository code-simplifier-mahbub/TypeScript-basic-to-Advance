// ***************// interface (without alias type)
// type User ={
//     name: string;
//     age: number;
// }

// interface IUser{
//     name: string;
//     age: number;
// }

// const userWithTypeAlias:User = {
//     name: 'Mahbub',
//     age: 22
// }

// const userWithInterface={
//     name: 'tanzil',
//     age: 23
// }

// /***********Interface with extend*********** */
// interface IUser{
//     name: string;
//     age: number
// }

// //extend
// interface IExtendedUser extends IUser{
//     role: string
// }

// //with type alias type without extend
// type extendUser = IUser &{
//     role: string
// }

// const user:IExtendedUser = {
//     name:'mahbub',
//     age: 22,
//     role: 'one'
// }

// // with type alias and without interface
// const user:extendUser = {
//     name:'mahbub',
//     age: 22,
//     role: 'one'
// }

// //************object , function , array is one kind of object
// //type alias
// type addNumberType = (num1: number, num2: number) => number;
// //interface
// interface IAddNumbers {
//     (num1: number, num2: number): number
// }
// //with alias
// // const addNumber: addNumberType = (num1, num2) => num1 + num2;

// //with interface
// const addNumber: IAddNumbers = (num1, num2) => num1 + num2;   

// //********interface in array
// interface MyArray{
//     [index: number]:number
// }
// const myArray: MyArray = [2, 3, 5]
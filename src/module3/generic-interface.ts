// //*********generic alias type 
// type CrushInfo<T> ={
//     name: string;
//     husband: T
// }

// const crushInfo:CrushInfo<boolean> ={
//     name: 'mahbub',
//     husband: true
// }

// //********* */ generic interface type

// interface CrushInterface<T>{
//     name: string;
//     husband: T
// }

// const crushInfoWithInterface:CrushInterface<boolean> = {
//     name: 'mahbub',
//     husband: true
// }
// //generic interface with string
// const crush2: CrushInterface<string>={
//     name: 'rupban',
//     husband: 'kashem'
// }

// //generic interface type with object
// const crush3: CrushInterface<object>= {
//     name: 'Laila';
//     husband: {name:'Tanzil', salary: 20000}
// }
// //generic interface type with destructuring object
// const crush4: CrushInterface<{name:string, salary: number}> = {
//     name: 'Riya',
//     husband: {name: 'Ronaldo', salary:2500}
// }

//**********multiple generic type in generic interface
interface CrushInformation<H, T, S>{
    name: string;
    husband: H ;
    wife: T ;
    salary: S ;
}

//with object
// const crush5: CrushInformation<object, object, number>={
//     name: 'mahbub',
//     husband: {
//         age: 22,
//         care: 'yes'
//     },
//     wife: {
//         age: 18,
//         care: 'yes'
//     },
//     salary: 2000000
// }

// //with destructuring object
// const crush5: CrushInformation<{age: number, care: string}, {age: number, care: string}, number>={
//     name: 'mahbub',
//     husband: {
//         age: 22,
//         care: 'yes'
//     },
//     wife: {
//         age: 18,
//         care: 'yes'
//     },
//     salary: 2000000
// }

//with simplified destructuring object
interface destructCommon  {
    age:number;
    care: string
}

const crush5: CrushInformation<destructCommon, destructCommon, number>={
    name: 'mahbub',
    husband: {
        age: 22,
        care: 'yes'
    },
    wife: {
        age: 18,
        care: 'yes'
    },
    salary: 2000000
}






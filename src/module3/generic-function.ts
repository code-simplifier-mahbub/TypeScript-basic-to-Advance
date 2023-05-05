// *******generic in function 

// //generic in function with string array
// const createArray=(param: string): string[]=> {
//     return [param]
// }

// createArray('mahbub')

// //generic in function with any type array
// const createArray1 = <T>(param: T): T[] => {
//     return [param]
// }

// const result = createArray1<string>('20000')
// // console.log(result);

// const result2 = createArray1<boolean>(false)
// // console.log(result2);

// const result3 = createArray1<object>({name: 'mahbub', age: 22})
// // console.log(result3);

// type Name= {
//     name: string;
//     age: number
// }
// const result4 = createArray1<Name>({name: 'bangladesh', age: 22})

// //generic in function with tuple

// const createArray1 = <X, Y>(param1: X, param2: Y): [X,Y] => {
//     return [param1, param2]
// }

// const result = createArray1<string, boolean>('20000', false)
// const result2 = createArray1<string, Array<string>>('mahbub', ['hati'])


// use generic in a function 

const addMeInMyCrushMind = <T>(myinfo:T) => {
    const crush6:string = 'sokhina';
    const newCrush = {...myinfo, crush6}
    return newCrush;

};

const myinfo = { 
    name: 'mahbub', 
    age: 22,
    salary: 1000000
}

const result6 = addMeInMyCrushMind(myinfo);
 
    
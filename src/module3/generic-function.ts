//*******generic in function 

//generic in function with string array
const createArray=(param: string): string[]=> {
    return [param]
}

createArray('mahbub')

//generic in function with any type array
const createArray1 = <T>(param: T): T[] => {
    return [param]
}

const result = createArray1<string>('20000')
// console.log(result);

const result2 = createArray1<boolean>(false)
// console.log(result2);

const result3 = createArray1<object>({name: 'mahbub', age: 22})
// console.log(result3);

type Name= {
    name: string;
    age: number
}
const result4 = createArray1<Name>({name: 'bangladesh', age: 22})
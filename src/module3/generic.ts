// //*********generic type
// type GenericArray<T> = Array<T>;

// const number1: GenericArray<number> = [2,4,6];
// const number2: GenericArray<string> = ['2', '3', '5'];
// const number3: GenericArray<boolean> = [true, false];
// const userNameAndRoolNumber: GenericArray<{name: string, roll: number}> = [{name: 'mahbub', roll: 3}]

// //************generic type with tuple */
// type GenericTupleObjkt = {name: string, age: number}
// type GenericTuple<X, Y> = [X, Y];

// const relationWithName: GenericTuple<string, string> = ['mahbub', 'hasan']
// const relationWithSalary: GenericTuple<string, number> = ['mahbub', 22000]
// const relationWithSalaryAndCompany: GenericTuple<GenericTupleObjkt, number> = [{name: 'mahbub', age: 22}, 30000]
// //key of constraints here
// type PersonType = {
//     name: string;
//     age: string;
//     address: string;
// }

// type newType = "name" | "age" | "address"; //manually dided here name age is persontype name age address

// type newTypeUsingKeyOf = keyof PersonType

// const exam1:newType = 'age';
// const exam2:newTypeUsingKeyOf = 'address'


// // key of using method 
// const keyUsing = {name: 'hasan', age: 22}
// const result8=keyUsing['age']
// console.log(result8);// now we are going to using this method


//generic keyof constraints
function getProperty<X,Y extends keyof X>(obj: X, key: Y){  // here Y = "name" | "age"
    obj[key]
}

const result9 = getProperty({name: 'hasan', age: 22}, "age")
console.log(result9);




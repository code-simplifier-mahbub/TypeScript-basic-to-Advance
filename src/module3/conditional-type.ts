// //general type
// type a1 = string;
// type a3 = number;
// type a4 = null;

// //conditional type
// type a2 = a1 extends string? string: null;

// type a5 = a3 extends string? number : a4 extends null? null :  a1 extends string? string : undefined; // thats cool and easy

// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }
// //this type A line for understand purpose only 
// type A = keyof Sheikh; //  key of shiekh means 'wife1' | 'wife2'

// // K extends keyof Sheikh  means 'wife1' extends 'wife1' | 'wife2'
// type CheckProperty<T, K> = K extends keyof Sheikh ? true: false; //there T is shiekh and K is 'wife1' 

// type CheckWife1 = CheckProperty<Sheikh, 'wife2'>


// //***another example */
// type myFriends = 'salman' | 'solaiman' | 'sadia';

// // //general version
// // type removeFriends = myFriends extends 'salman' ? never: 'solaiman and sadia is couple' //never means remove thats why salman remove from here

// //organised version with generic
// type removeOneFriend<T, K> = T extends K ? never: T;
// type currentFriend = removeOneFriend<myFriends, 'salman'> //there answere is 'solaiman' | 'sadia'

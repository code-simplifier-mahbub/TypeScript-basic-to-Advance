// //null type
// const searchName = (value: string | null) => {
//     if(value === null){
//         console.log('data not found')
//     }
//     else{
//         console.log('data searching');
//     }
// }

// searchName(null)

// // unknown type
// const carSpeed = (speed:unknown) => {
//     if(typeof speed === 'number'){
//         const convertedSpeed = (speed * 1000) / 3600;
//         console.log(convertedSpeed);
//     }
//     if(typeof speed === 'string') {
//         const [value, unit] = speed.split(' ');
//         const convertedSpeed = (parseFloat(value) * 1000) /3600;
//         console.log(`my speed is ${convertedSpeed}`);
//     }
//     else{
//         console.log('data invalid');
//     }
// }

// carSpeed(20)
// carSpeed('10 kmh^-1')


// // never type
// const throwError = (message: string):never => {
//     throw new Error(message)
     
// }
// throwError('kam binash error khaici')
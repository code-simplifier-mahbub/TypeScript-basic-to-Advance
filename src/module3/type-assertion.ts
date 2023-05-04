// //type assertion 
// let example: any ;
// example = 'kone geli';

// // console.log((example as string).length);
//  function  kgToGram(param: number | string ): number | string | undefined{
//     if(typeof param === 'string'){
//         const value = parseFloat(param) * 1000;
//         return `The converted value is ${value}`
        
//     }
//     if(typeof param === 'number'){
//         const value = param * 1000;
//         return `The value is ${value}`
        
//     }
//  }

// kgToGram(1000) as number;
// kgToGram('1000') as string;


// // type assertion with try catch
// type customErrorType ={
//     message:string
// }
// try{

// }catch(err){
//     console.log((err as customErrorType).message)
// }
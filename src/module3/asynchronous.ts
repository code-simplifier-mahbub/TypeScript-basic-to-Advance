

//Mocking : mocking is create data when server data is not available

// **********//asynchronous type for string
// const makePromise = (): Promise<string> => { // function and promise type
//     return new Promise((resolve, reject) => {  // whole Promise is return
//         const data: string = 'data is fetched'; // in promise we need fetch data from server or create data
//         if(data){
//             resolve(data); // resolve data if available
//         }
//         else{
//             reject("failed to fetch data") // throw error if data is not available
//         }
//     })
// } 

// const getPromiseData = async (): Promise<string>=> {  // asynchronous function and define Promise<type>
//     const data = await makePromise(); // for promise we need await so we need asynchronous function
//     return data;
// }



// ***********//asynchronous type for boolean
// const makePromiseForBoolean = (): Promise<boolean> => { // function and promise type
//     return new Promise((resolve, reject) => {  // whole Promise is return
//         const data: boolean = true; // in promise we need fetch data from server or create data
//         if(data){
//             resolve(data); // resolve data if available
//         }
//         else{
//             reject("failed to fetch data") // throw error if data is not available
//         }
//     })
// } 

// const getPromiseDataForBoolean = async (): Promise<boolean>=> {  // asynchronous function and define Promise<type>
//     const data = await makePromiseForBoolean(); // for promise we need await so we need asynchronous function
//     return data;
// }



// **********//asynchronous type for object
// const makePromiseForObject = (): Promise<object> => { // function and promise type
//     return new Promise((resolve, reject) => {  // whole Promise is return
//         const data: object = {name: 'My name is Mahbub'}; // in promise we need fetch data from server or create data
//         if(data){
//             resolve(data); // resolve data if available
//         }
//         else{
//             reject("failed to fetch data") // throw error if data is not available
//         }
//     })
// } 

// const getPromiseDataForObject = async (): Promise<object>=> {  // asynchronous function and define Promise<type>
//     const data = await makePromiseForObject(); // for promise we need await so we need asynchronous function
//     return data;
// }



// *******//asynchronous type for object with data type
// // type DataType = {
// //     data: string;
// // }
// interface DataType  { // we can use interface
//     data: string;
// }

// const makePromiseForObject = (): Promise<DataType> => { // function and promise type
//     return new Promise((resolve, reject) => {  // whole Promise is return
//         const data: DataType = {data: 'My name is Hasan'}; // in promise we need fetch data from server or create data
//         if(data){
//             resolve(data); // resolve data if available
//         }
//         else{
//             reject("failed to fetch data") // throw error if data is not available
//         }
//     })
// } 

// const getPromiseDataForObject = async (): Promise<DataType>=> {  // asynchronous function and define Promise<type>
//     const data = await makePromiseForObject(); // for promise we need await so we need asynchronous function
//     return data;
// }

//**********asynchronous data type for json data */
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  
  const getToDo = async(): Promise<ITodo>=> {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      return await response.json();
  }
  
  const getToDoData = async(): Promise<void> => {
      const result = await getToDo();
    //   console.log(result);
  }
  
  getToDoData();
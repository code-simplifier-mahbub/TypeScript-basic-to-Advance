// //**********type guard 
// type Alphaneumeric = number | string;
// function add(param1: Alphaneumeric, param2: Alphaneumeric){
//     if(param1 === 'number' && param2 === 'number'){
//        return param1 + param2;
//     }
//     else{
//         param1.toString() + param2.toString()
//     }
// }

// //call function
// add(2, 4); // there will be sum operation
// add('mahbub', 'hasan') // there will be concatinate operation

//*************In Guard */
//type declare
type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string; 
    role: 'admin'
}

//function add for checking user
function getUser(user: NormalUserType | AdminUserType): string{
    if("role" in user){
        return(`I am a ${user.role} user`)
    }
    else{
        return('I am a normal user')
    }
}

const normaluser1: NormalUserType = {name: 'mahbub'}    // akhane object declare kora hoice jetar man function a jabe
const adminuser1: AdminUserType = {name: "hasan", role: "admin"}  // akhane object declare kora hoice jetar man function a jabe
//function call
console.log(getUser(normaluser1));
console.log(getUser(adminuser1));
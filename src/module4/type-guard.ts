//**********type guard 
type Alphaneumeric = number | string;
function add(param1: Alphaneumeric, param2: Alphaneumeric){
    if(param1 === 'number' && param2 === 'number'){
       return param1 + param2;
    }
    else{
        param1.toString() + param2.toString()
    }
}

//call function
add(2, 4); // there will be sum operation
add('mahbub', 'hasan') // there will be concatinate operation

//*************In Guard */

// //****************parents class
// class Parents{
//      // parameter type
//      name: string; 
//      age: number;
//      address: string;
 
//      //constructor define
//      constructor(name: string, age: number, address: string){ 
//          //initialize name and age with this.property name
//          this.name = name;
//          this.age = age;
//          this.address = address;
//      }
//      makeSleep(hour: string){ //method
//          console.log(`${this.name} need ${hour} sleep`)
//      }
// }
// //**************Student child class
// class Student extends Parents{
    
//     //constructor define
//     constructor(name: string, age: number, address: string){ 
//         super(name, age, address) // inherit Parents class 
        
//     }
//    //by default method call here from parents class
// }
// const student1 = new Student('solaiman', 25, 'karatia')

// //*************Teacher child class
// class Teacher extends Parents{
//     // parameter type
//     designation: string; //different property and personal property

//     //constructor define
//     constructor(name: string, age: number, address: string, designation: string){ 
//         super(name, age, address) // inherit Parents class 
//         //initialize name and age with this.property name
//         this.designation = designation // personal class property
//     }
//     //by default method call here from parents class

//     //another method
//     takeClasses(numOfClass: number): string {
//         return `This ${this.name} will take ${numOfClass} class`
//     }
// }

// const teacher1 = new Teacher('sadia', 18, 'Mymenshingh', 'wife');
// teacher1.address // come from parents
// teacher1.name // come from parents
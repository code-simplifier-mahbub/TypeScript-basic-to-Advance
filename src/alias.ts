
type CrushType={
    name:string,
    age?:number,
    profession: string
}

const myCrush:CrushType= {
    name: 'korean',
    age:22,
    profession: 'web develooper'
}
// console.log(myCrush)

type CourseType = string;

const course: CourseType = 'web dev';
// console.log(course);


type Operation = (x:number, y:number) => number

const calculate = (
    num1:number,
     num2:number,
     operation: Operation
     ) => {

    return operation (num1, num2)
}

calculate(10,20, (x,y)=> x+y)


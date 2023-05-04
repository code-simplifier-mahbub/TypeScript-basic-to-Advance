// //union type
// type NoobDev = {
//     name: string
// }

// type juniorDev = {
//     name: string,
//     expertise: string,
//     experiance: number
// }

// const newDevelooper:NoobDev | juniorDev = {
//     name: "mahbub",
//     expertise: 'web dev',
//     experiance: 2,
// }

//intersection
type NoobDev = {
    name: string
}

type juniorDev = NoobDev & {
    expertise: string,
    experiance: number
}

type NextDev = juniorDev& {
    leadership: number,
    level: number
}

const newDevelooper:NoobDev | juniorDev = {
    name: "mahbub",
    expertise: 'web dev',
    experiance: 2,
}

const develooper: NextDev =  {
    name: 'mahbub',
    expertise: 'ful dev',
    experiance: 3,
    leadership: 1,
    level:2
}
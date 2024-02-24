//  let studentName:string = "aditya"

//  console.log(studentName.toLocaleUpperCase());



 

//  let PhoneNo:any = 234245.34;
//  PhoneNo = "naming"

//  console.log(PhoneNo)



// let isLogIn:boolean = false;

// console.log(isLogIn.valueOf())

// function AddToNumber(num:number):number{
//     return num+2;
// }

// AddToNumber(7);

// const arr = ["aditya", "pallavi", "sheetal_prasad", "neera_devi"]

// arr.map((item : string)=>{
//     console.log(`i am ${item}`)
// })


// function Savege():never{
//   console.log("adity is a boy with powerfull mind")

// }

const students ={
    name : "aditya",
    roll_no : 623187541746,
    year : "third_year"
}

function SelectStudent({name:string,roll_no:number}){
    console.log(`i am ${name} and my roll_no is ${roll_no}`);
}


SelectStudent(students)


export{}

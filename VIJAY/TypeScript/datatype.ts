console.log("hello friends")

// 1. number datatype

let num1:number=100, num2:number=0.5, num3:number=123456

console.log(num1, num2, num3)

//2.string

let fname:string="vijay",lname:string="kumar"
console.log(fname, lname)

// 3.boolean

let cond1:boolean=true,cond2:boolean=false
console.log(cond1,cond2)

// 4.array 

let students:string[]=["ajith","vijay","prasanth"]
let emp:Array<string>=["mohana","priya","arthi"]

// 5.tupple data  : it allows user to store multiple type of data in array

let product :[number,string]=[1,"vijay"]

// 6.enum data  it is use to create constant variable with value

enum days{sun,mon,tue=101,wed,thus,fri,sat}
let data1=days.sun
let data2=days.mon
let data3=days.fri


// 7. union data : it allows user to store multiple type of data in single variable

let items:string |number=2657

// 8.any data type : when we dont know what type of data is going to store in variable

let futureData:any=true



    
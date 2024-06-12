
import Person from "./oops";

class Company extends Person{
    cname:string
    gstnumbar:number
    state:string

    constructor(name:string,contact:number,address:string,single:boolean,compname:string,compgst:number,compstate:string){
        super(name,contact,address,single)

        this.cname=compname
        this.gstnumbar=compgst
        this.state=compstate
    }

 personDetails(){
     console.log(`companyname:${this.cname} name:${this.pname} contact:${this.pcontact} gstnumber:${this.gstnumbar} state:${this.state}`)
    }
}

let compObj=new Company("vijay",777,"kerala",true,"changepond",12364,"tamilnadu")

compObj.personDetails();
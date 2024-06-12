

// export class Person{
 class Person{

    //data-member
    pname:string="vijay"
    pcontact:number=123654
    paddress:string="chennai"
    psingle:boolean=true
    
    // constructor

    constructor(name:string,contact:number,address:string,single:boolean){
        this.pname=name
        this.pcontact=contact
        this.paddress=address
        this.psingle=single
    }

    //member function
    personDetails(){
        console.log(`name:${this.pname} contact:${this.pcontact} address:${this.paddress}`)
    }

}

// how to create object of class

// let personObj=new Person("prasanth",123654,"chennai",true)
// console.log(personObj.pname)
// personObj.personDetails()

// let personObj1=new Person("ajith",1654,"guduvanjery",true)
// console.log(personObj1.pname)
// personObj1.personDetails()

export default Person



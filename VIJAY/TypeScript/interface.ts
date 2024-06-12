interface IResult{

    totalMarks()
    percentage()



}

class Students implements IResult{

        phy:number
        che:number
        maths:number
        total:number

        constructor(p:number,c:number,m:number){
            this.phy=p
            this.che=c
            this.maths=m
        }


        totalMarks() {
            return this.total=this.phy+this.che+this.maths
        }

        percentage() {
            return (this.total/300)*100
        }

        StudentResult(){
            console.log(`physics:${this.phy} chemistry:${this.che} maths:${this.maths} total:${this.totalMarks()} percentage:${this.percentage()}`)
        }
}

let stdObj=new Students(90,95,98)
stdObj.StudentResult()
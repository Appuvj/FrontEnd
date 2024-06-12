"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class Person{
var Person = /** @class */ (function () {
    // constructor
    function Person(name, contact, address, single) {
        //data-member
        this.pname = "vijay";
        this.pcontact = 123654;
        this.paddress = "chennai";
        this.psingle = true;
        this.pname = name;
        this.pcontact = contact;
        this.paddress = address;
        this.psingle = single;
    }
    //member function
    Person.prototype.personDetails = function () {
        console.log("name:".concat(this.pname, " contact:").concat(this.pcontact, " address:").concat(this.paddress));
    };
    return Person;
}());
// how to create object of class
// let personObj=new Person("prasanth",123654,"chennai",true)
// console.log(personObj.pname)
// personObj.personDetails()
// let personObj1=new Person("ajith",1654,"guduvanjery",true)
// console.log(personObj1.pname)
// personObj1.personDetails()
exports.default = Person;

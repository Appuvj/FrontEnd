console.log("hello friends");
// 1. number datatype
var num1 = 100, num2 = 0.5, num3 = 123456;
console.log(num1, num2, num3);
//2.string
var fname = "vijay", lname = "kumar";
console.log(fname, lname);
// 3.boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
// 4.array 
var students = ["ajith", "vijay", "prasanth"];
var emp = ["mohana", "priya", "arthi"];
// 5.tupple data  : it allows user to store multiple type of data in array
var product = [1, "vijay"];
// 6.enum data  it is use to create constant variable with value
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 101] = "tue";
    days[days["wed"] = 102] = "wed";
    days[days["thus"] = 103] = "thus";
    days[days["fri"] = 104] = "fri";
    days[days["sat"] = 105] = "sat";
})(days || (days = {}));
var data1 = days.sun;
var data2 = days.mon;
var data3 = days.fri;
// 7. union data : it allows user to store multiple type of data in single variable
var items = 2657;
// 8.any data type : when we dont know what type of data is going to store in variable
var futureData = true;

// mycommit
/* if else test */
const num1 = 2
let num2 = 0

if (num1 === 2){num2 += 3}
else if (num1 < 2){num2 += 4}
else if (num1 > 1){num2 += 5}
else {num2 += 6}
/*
Airline ticket example

not member = full price
normalMember = 5% discount
silverMember = 10% discount
goldMember = 15% discount
platinumMember = 20% discount
*/

const originalPrice = 100;
let totalPrice = 0;
let memberType = "silverMember"

if (memberType === "normalMember"){totalPrice += 100 * 0.95;}
else if (memberType === "silverMember"){totalPrice += 100 * 0.9;}
else if (memberType === "goldMember"){totalPrice += 100 * 0.85;}
else if (memberType === "platinumMember"){totalPrice += 100 * 0.8;}
else {totalPrice = originalPrice;}

const originalPrice = 100
let totalPrice = 0
let memberType = "notmember"

switch (memberType) {
    case "normalMember" : totalPrice += 100 * 0.95
    break;
    case "silverMember" : totalPrice += 100 * 0.9
    break;
    case "goldMember" : totalPrice += 100 * 0.85
    break;
    case "platinumMember" : totalPrice += 100 * 0.8
    break;
    default : totalPrice = originalPrice
}

let num1 = 0;
//functionTest 
function calculate(number1, number2, number3){
    num1 = number1 * number2 * number3
    num1 += 4
    num1 /= 2
}

calculate()
// value returning function
let num1 = 0;
function getNumber(number){
    
    return number

    //only work code infront of return,not back
    
}
const myNumber = getNumber();

//built-in function
alert ("Hello World")

// ES6 arrow function
const myarrowfunction = (para1,para2) => 
para1 * para2
// {} ထည်ချင်ရင် returun need

myarrowfunction(2,3)

//object
//why? to add more than one property in one vaiable
{} // empty object
//not use semicolum(;) only use commar(,)

const person1 = {
 name: "Aung Aung",
 age: 30,
 height: 180,
 city: "Nyao",
 date_ofBirth:1990,
 isActor: false,
}

//method of object(using function)

const person1 = {
 name: "Aung Aung",
 age: 30,
 height: 180,
 city: "Nyao",
 date_ofBirth:1990,
 isActor: false,
 walk: () => {
    alert("Aung Aung is sleeping now...")
 } //walk is method name.
}
//Accessing object's properties and methods
//(1) dot notation eg-
person1.name
person1.age
person1.isActor
person1.walk() //call funtion

//(2) bracket notation eg-
person1['name']
person1['date_ofBirth']
person1['walk']()//call function

//setting new properties and method(only already know)

person1.hobby = "football";// if worng do same and change value
person1.isMale= true
person1.eat = () => {alert("Aung Aung is eating")}

//for data from user(unknowData)

const input1 = ""
const input2 = ""
const propertyName = "DonatedBy" + input1
//DonatedByMgMg=10000
person1[propertyName] = input2
//doesn't work with Dot . ,only work with blanket[] This is dynamic. 

//Other object add in One Object
const car = {
          price: 5000000,
          model: "Toyota",
          madeBy: "Japan"      
}
person1.carinfo = car //can add direct (carinfo:car,)
person1.carinfo.driver="U Ba"//can add new properties
person1.carinfo.price //can call variable like that

//window object
window.console.log()
//can add variable without ""

//Array[] (array id order)
//order{} (object is unorder)
const unorder = {x : "80 view",y : "video title",z : "songs"}
const order = ["Joset","Jotaro","Josuke",]

//index နှင့်ခေါ်ရ (start 0) eg-
order[0]
//array.length(count the elements)
//array.push(""); (add new elements) this is method.eg-
order.push("Jolyne")
 // get last item in an array
 const index = order.length-1
 order[index] //call index






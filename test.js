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



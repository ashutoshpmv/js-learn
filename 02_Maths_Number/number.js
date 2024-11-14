const num1=100
console.log(typeof num1)

const num2=new Number(200)
console.log(typeof num2);     //object
console.log(num2);

//convert to string and get its length
console.log(num2.toString().length);

//get decimal values(for e-commerce websites)
console.log(num2.toFixed(3));  //200.000

const newNum=123.8966
console.log(newNum.toPrecision(3)); //124   returns a string

//set zeros COMMA a/c to US/INDIA SYSTEM.
const hundreds=1000000000;
console.log(hundreds.toLocaleString());  //to US-SYSTEM

console.log(hundreds.toLocaleString('en-IN'));  //to US-SYSTEM

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(num2.MIN_VALUE);






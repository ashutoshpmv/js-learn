// JavaScript is a dynamically typed language.

//In JavaScript, variable types are determined at runtime rather than at compile time. This means you can assign any type of value to a variable without declaring its type explicitly, and you can reassign it to a different type later.

 // 1. 7 Primitive Data Types- Number, boolean,string.null, undefined, symbol,bigint
  // 3. if only variable is declared, then it is having undefined value. eg.-

 let userName;
 console.log(userName); //undefined
 console.log(typeof userName);  //undefined
 const num1=56455n;   //to declare a bigInt put -"n" at the last
 console.log(typeof num1);

 // 2. 3 Non-Primitive Data Types- Arrays, Objects, Functions.
const heroes =["A","B","C"] //ARRAYS

 //OBJECTS IN CURLY BRACKETS
const myObj= {
    name1 : "Ashutosh",
    age : 22,
}
 
//STORE A FUNCTION IN A VARIABLE
const myFunction= function(){
    console.log("Ashutosh in function.");    
}

console.log(typeof myFunction)

  
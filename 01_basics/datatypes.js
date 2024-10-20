"use strict"; //treat all JS code as newer version

// www.tc39.es --->>for ecma script standards of JS and mdn for normal documentation
// number,string,bigint,boolean(t/f)

//null-standalone value
//undefined- abhi vaklue assign nahi hui hai
//symbols-unique
//object

let myName="Ashutosh"
console.log(typeof(myName));
console.log(typeof null);
console.log(typeof undefined);

//Output => string object undefined

//typeof(null)--->> object
//typeof(undefined)--->> undefined

//TYPECASTING
let num="4"
console.log(typeof num);
let numInt=Number(num)
console.log(typeof numInt);
console.log(numInt);

//if in place of "4", "4ab" is written then we get NaN as output

//TYPE-CONVERSION TO BOOLEAN
//1=>true  0=>false
// ""=>false  "ashu"=>true


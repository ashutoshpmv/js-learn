const myObj={
    name:"Ashutosh",
    "fullName":"Ashutosh Kumar Singh",
    age:18,
    college:"G.L.Bajaj",
    email:'ashu@google.com'
}

//to print two ways, but 2nd one is more appropriate
console.log(myObj.email);
console.log(myObj["email"]);
// console.log(myObj.fullName);  ---->> error, thats why we dont prefer
console.log(myObj["fullName"]);

//use symbol as keys
const mySym=Symbol("Key1")
const mynewObj={
    name:"Ashutosh",
    "fullName":"Ashutosh Kumar Singh",
    age:18,
    [mySym]:"This is key1 key value",
    college:"G.L.Bajaj",
    email:'ashu@google.com'
}

console.log(mynewObj[mySym]);
console.log(typeof mynewObj[mySym]);  //string
console.log(typeof mySym); 



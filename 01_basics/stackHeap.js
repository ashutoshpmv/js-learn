// in Primitve Data type we get the copy of the value,i.e. Call by value
let age1=22;
let age2=age1;
age2=12;
console.log(age1);      //22    
console.log(age2);      //12

//in Non-Primiitive data type we get the reference of the variable;
let userOne={
    names:"Ashutosh"
}
let userTwo=userOne
userTwo.names="Abhishek";
console.log(userTwo.names);     //Abhishek
console.log(userOne.names);     //Abhishek  because both point to same 




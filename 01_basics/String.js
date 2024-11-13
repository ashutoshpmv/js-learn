//STRING INTERPOLATION- USING BACKSLASH adns also we can use string methods in the interpolation
const name = "Ashutosh";  //A WAY TO INITIALIZE STRING
const age = 20;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// 2. OBJECT INITIATION OF STRING
const getName=new String("Ashutosh")   //STRING OBJECT IS CREATED , NOT THE PRIMITIVE STRING. AND ADVISED TO CREATE USING STRING LITERALS SEE LINE NO.2
console.log(getName);
console.log(getName.toUpperCase());  
console.log(name.length);
console.log(name.toUpperCase());
//ASHUTOSH but getName is still Ashutosh because it(String) is primitive type and stored in stack where only the copy is changed and the original is unchanged.

/*
string methods --
1. .charAt(1);
2. .indexOf('s');
*/

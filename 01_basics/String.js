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
3. .substring(0,4)    0->3 tak bas hoga

*/
const name11 = "Ashutosh";
console.log(name11.slice(-3, 4));
   
// -3 as the start index: In JavaScript, a negative start index means it starts counting from the end of the string. Here, -3 points to the third character from the end, which is "o" in "Ashutosh".

// 4 as the end index: slice extracts up to, but not including, the character at the end index. So, it will stop at index 4 (where slice considers only the characters from index 0 to 3).

//When slice detects that the start index is after the end index, it returns an empty string because there’s no valid range to extract.

//but--
console.log(name11.slice(-7, 4));   //-7 is s in ASHUTOSH  and 4 is t so, result- shu

const trimExample="   ASHUTOSH.    "
console.log(trimExample.trim());

const url="ashutosh@gmail.com"
console.log(url.replace("gmail.com","yahoo.com"));

//check whether a substring is present or not
console.log(name11.includes("Ashu"))   //true
console.log(name11.includes("Ashi"))    //false

//string to array otbo some character, here @
const exam="Ashu@Abhishek@Anita@Vishnu@RamBriksh@Jailashi@Shambhu";
console.log(exam.split('@'));





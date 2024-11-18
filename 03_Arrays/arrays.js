/*
1. Dynamic (Re-sizable)
2. mix of different data types
3. when we create a copy operation, it creates a SHALLOW COPY (both copies share the same reference) || but in DEEP COPY - both copies share different reference.
*/

const myArr=[1,2,3,4,5,"Ashu","Abhishek"]
const myHeroes=["shaktiman","marvel"]

const myArr1=new Array(3,4,"Ashu",'Abhi')
console.log(myArr1);

//push,pop
myArr1.push("Vishnu")
console.log(myArr1);

myArr1.pop()
console.log(myArr1);

//unshift->adds an element at the begining but every element has to be shifted by one place at front.so time consuming  AND REVERSE IS SHIFT (removes AB)
myArr1.unshift("AB")
console.log(myArr1);

/*
.includes(element)
.indexOf(element)
*/

const arrayToString=myArr1.join()   //Array-->String  .join
console.log(arrayToString);
console.log(typeof arrayToString);  //string

//STRING/OBJECT----->>ARRAY
let strToArray=Array.from('Ashutosh')
console.log(strToArray);
//check whether it is array or not
console.log(Array.isArray(strToArray));
//for key/values/objects==>> returns an empty array bcz we need to define whose array we need to make.
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


//SLICE vs SPLICE
let arr=[1,2,3,4,5,6]
console.log("Before Slice : ",arr);

const slice=arr.slice(1,5)
console.log("Sliced elements : ",slice);
console.log("After Slice, original array : ",arr,"\n");

const splice=arr.splice(2,3)
console.log("Spliced elements : ",splice);
console.log("After Splice, original array : ",arr);
//   arr.splice(2, 3) removes 3 elements starting from index 2. i.e.  3,4,5 are spliced elements ****(ALSO FROM THE ORIGINAL ARRAY)****
//      This modifies the original array by removing the specified elements. ...WE R LEFT WITH JUST 1,2,6









console.log(2> 1)  // Level 1 of comparing
console.log("2"> 1)   //in both these 2/02(leading 0 is ignored) is explicitly converted to number 2. This is level 2 of comparing
console.log("02">1);

console.log(null>0);  //null means 0
console.log(null>=0);  //null means 0
console.log(null==0);  //null doesnt means 0 rather means undefined.
// in JS , equality check(==) and comparison operators(>,<,<=,>=) work differently. lets prove :-
console.log(null==undefined);  //true


console.log("2"==2)  //true bcz 2 is explicitly converted to number by js. this is LOOSE EQUALITY COMPARISON.
console.log(2 ===2) //number to number
console.log("2"===2) //string to number bcz this is STRICT EQUALITY COMPARISON  where data type and data value both are checked.
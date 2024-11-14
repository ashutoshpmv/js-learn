let date=new Date()
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toString());
console.log(date.toTimeString());

/*Thu Nov 14 2024
2024-11-14T17:19:07.079Z
2024-11-14T17:19:07.079Z
11/14/2024
11/14/2024, 5:19:07 PM
Thu Nov 14 2024 17:19:07 GMT+0000 (Coordinated Universal Time)
17:19:07 GMT+0000 (Coordinated Universal Time)
*/

//USE CONSTRUCTORS TO CREATE DATE  -- MONTH STARTS FROM 0-JANUARY TO 11-DECEMBER
let createdDate=new Date(2024,10,24,5,3)
console.log(createdDate.toLocaleString());  //11/24/2024, 5:03:00 AM

//IN INDIA , MM-DD-YYYY is followed where month 1 is January.
let createdDate1=new Date("01-13-2001")
console.log(createdDate1.toLocaleString());  //1/13/2001, 12:00:00 AM

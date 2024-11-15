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
//now when we dont use comma, then it starts from 1 i.e. Januray
let createdDate2=new Date('2024-11-15')
console.log(createdDate2.toLocaleString());  //11/15/2024, 12:00:00 AM 

//IN INDIA , MM-DD-YYYY is followed where month 1 is January.
let createdDate1=new Date("01-13-2001")
console.log(createdDate1.toLocaleString());  //1/13/2001, 12:00:00 AM 

let myCreatedDate=new Date("11/15/2024 22:36")
let myTimeStamp=Date.now();  //This retrieves the current timestamp in milliseconds (bcz in ms it gives more preciision) since 1 January 1970 (Unix Epoch).

console.log(myTimeStamp)  // Prints the current timestamp to the console.
console.log(myCreatedDate.getTime());  // gives the timestamp for the start of the day of the specified date in UTC. 15 nov 2024 k raat 12 bje tak ka time stored rhega in ms.(AGAR SIRF DATE MENTION KIYA HAI TO, WRNA AGAR TIME BHI MENTION HUA HAI TO EXACT LIVE TIME BTAEGA KITNA MILLISEC PASS HO CHUKA HAI US TYM TAK)

//REAL LIFE EXAMPLE OF MEETING
let meetingDate = new Date("11/15/2024 15:00"); // Meeting at 3:00 PM on Nov 20, 2024
let currentTime = Date.now();

if (currentTime > meetingDate.getTime()) {
    console.log("The meeting has already started or passed.");
} else {
    console.log("Reminder: Your meeting is coming up!");
}

//GET TIME IN SECONDS
console.log(Math.floor(Date.now()/1000));

//VERY IMPORTANT--GET DATE/TIME IN YOUR FORMAT
console.log(meetingDate.toLocaleString('default', {
    weekday: "long"
}));




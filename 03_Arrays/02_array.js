const familyA=['A','B','C','D']
const familyB=['E','F','G','H']

//LETS join the families together

//option 1- push B into A
// familyA.push(familyB)
// console.log(familyA);
//OUTPUT -[ 'A', 'B', 'C', 'D', [ 'E', 'F', 'G', 'H' ] ]  means the push operator pushes into SAME ARRAY. AND we get array inside array

//OPTION2-concat B and A
// const concatFamily=familyA.concat(familyB)
// console.log(concatFamily);  //output is single array with both family members.

//option 3- SPREAD..
const newFamily=[...familyA,...familyB]
console.log(newFamily);
//same output as above and THIS IS USED MORE FREQUENTLY and we can join more than >2 arrays but not in concat






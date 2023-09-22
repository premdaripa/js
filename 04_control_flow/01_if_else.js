// if (2 == "2") {
//   //Yes, check for value
//   console.log("Yes");
// }

// //if-else
// if (2 === "2") {
//   //strict check, check for data type also
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const bal = 400;

//implicit scope
if (bal > 200) console.log("Minimum balance maintained");


//nested if and if-elseif-else lader
const age = 18;
if (age > 0) {
  if (age < 18) {
    console.log("Wait until you terned 18");
  } else if (age > 18 || age < 140) {
    console.log("Vote Carefully");
  } else {
    console.log("Invalid Input");
  }
} else {
  console.log("Invalid input");
}

// ACTIVITY 1

// Declaration of variables
let firstFavNumber = 10;
let secondFavNumber = 11;

console.log(firstFavNumber + secondFavNumber);
console.log(firstFavNumber - secondFavNumber);
console.log(firstFavNumber * secondFavNumber);
console.log(firstFavNumber / secondFavNumber);
console.log(firstFavNumber % secondFavNumber);
console.log(Math.pow(firstFavNumber));


// ACTIVITY 2
console.log(firstFavNumber > secondFavNumber);
console.log(firstFavNumber < secondFavNumber);
console.log(firstFavNumber >= secondFavNumber);
console.log(firstFavNumber <= secondFavNumber);
console.log(firstFavNumber === secondFavNumber);
console.log(firstFavNumber == secondFavNumber);
console.log(firstFavNumber !== secondFavNumber);
console.log(firstFavNumber != secondFavNumber);



//ACTIVITY 3
let password= prompt ("Enter your password");
 input =(password.length); 
    
if (password.length === 8) 
{   
    console.log("Welcome");
} 
else if (password.length <= 8) 
{
    console.log("Password is too short");
} 
else if (password.length >= 8); 
{
    console.log("Too long Password"); 
    console.log("Password should be 8 characters");
 }
 {
    console.log ("Please provide password");
}

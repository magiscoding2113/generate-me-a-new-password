// Assignment Code
var password ="";
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="0123456789";
var specialChars =" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var candidates ="l M ! 6";
var length;
//var includeLower //confirm ("would you like to use lowercase letters?;");
var includeUpper = false;
var includeSpecial = false;
var includeNumber = false;
var letter = "";
includeLower = "Would you like to use lowercase letters?:"
function generateRandom(string) {
Math.random()*string.length
console.log(string);
}
generateRandom(lowercase);
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
  var length = prompt("Enter password length:"); 
  includeLower= confirm("would you like to use lowercase letters?:")
  //includeUpper = confirm("would you like to use Uppercase letters?:");
  //includeSpecial = confirm("would you like to use a Special character?:");
  //includeNumber = confirm("would you like to use a Number?:");
  
if (length < 8) {
alert("Password length must be at least 8 characters");
}
if (length > 128 ) {
  alert ("Password length must be under 128 characters");
}
if (includeLower === true ) {
 generateRandom(includeLower);
}
//if (includeUpper != true) {
  //alert(includeSpecial);
 //} 
 //else if (includeUpper === true) {
    //generateRandom(uppercase);
  //}

}

function writePassword() {
var password = generatePassword("#password");
//var password= document.querySelector("#generate")

  //password.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  //if (includeNumber === true) {
    //generateRandom(numbers);
//}



// if(includeNumber === true) {
// letter= numbers
// password= generatePassword("#generate")
// }
  


//var password = "password"
 
// Write password to the #password input
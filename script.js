// Assignment Code
var password =""
var lowercase ="abcdefghijklmnopqrstuvwxyz"
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers ="0123456789"
var specialChars =" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var candidates ="l M ! 6"
var length = 0
var includeLower 
var includeUpper = false
var includeSpecial = false
var includeNumber = false
var letter = ""


var generateBtn = document.querySelector("#generate");

  function generatePassword() {
  length = window.prompt("Enter password length:") 
  if(length <8 );
  alert("password should be from 8 to 128 characters long")
  return password;
 }

 includeLower = prompt("Would you like to use lowercase letters?:") 
 if (includeLower = true ); {
 letter = lowercase;
 password = password + letter
 
 }

 includeUpper = prompt("would you like to use Uppercase letters?:")
 if (includeLower = true); {
   letter= uppercase;
password = password + letter
 }


includeSpecial = prompt("would you like to use a Special character?:")
if (includeNumber = true); {
  letter= specialChars
password= password + letter
}


includeNumber= prompt("would you like to use a Number?:")
if(includeNumber= true) {
letter= numbers
password= password + letter
}


var password = "password"
 
// Write password to the #password input
function writePassword() {
 var password = generatePassword("#password");
var password= document.querySelector("#generate")

  password.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

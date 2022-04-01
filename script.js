// Assignment Code
var password =""
var lowercase ="abcdefghijklmnopqrstuvwxyz"
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers ="0123456789"
var specialChars =" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var candidates =""
var length = 0 
var includeLower = false
var includeUpper = false
var includeSpecial = false
var includeNumber = false
var letter = ""


var generateBtn = document.querySelector("#generate");

  function generatePassword() {
  var length = window.prompt("enter password length:") 
  if(length <8 , length > 128);
  alert("password should be from 8 to 128 characters long")
  return password;
 }
  
 
/*var password = "password";*/
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  /*var password= document.querySelector("#password");*/

  password.value = password;

}


includeLower = window.prompt("Would you like to use lowercase letters?:") 
if (includeLower === true );{
var lowercase = "abcdefghijklmnopqrstuvwxyz";
password = password + letter
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

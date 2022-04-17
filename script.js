// Assignment Code
var passwordSelected;
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="0123456789";
var specialChars =" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var candidates ="l M ! 6";
var length;
var includeLower = false;
var includeUpper = false;
var includeSpecial = false;
var includeNumber = false;
var letter = "";
var selectedCharacters = [];



function generateRandom(string) {
return Math.floor(Math.random()*string.length);
}






var generateBtn = document.querySelector("#generate");

function generatePassword() {
  do {
    var length = prompt("Please select a password, length must be between 8 and 128 characters:")
  } while (length < 8 || length > 128);
  includeLower = confirm("Would you like to use Lowercase letters?:");
  includeUpper = confirm("would you like to use Uppercase letters?:");
  includeSpecial = confirm("would you like to use a Special character?:");
  includeNumber = confirm("would you like to use a Number?:");
  
  if(
    includeLower === false &&
    includeUpper === false &&
    includeSpecial === false &&
    includeNumber === false) {
      alert("You must select at least one character type");
      return false;
    }
 


  if (includeLower === true ) {
   //var lowercase = slice(generateRandom);
  lowercase = lowercase.slice(lowercase);
  selectedCharacters.push(generateRandom(lowercase));
   //console.log(generateRandom(lowercase));
   //console.log(lowercase.slice(4,20));
  }
  if (includeUpper === true) {
   uppercase = uppercase.slice(uppercase);
   selectedCharacters.push(generateRandom(uppercase)); 
   //console.log(generateRandom(uppercase));
   //console.log(uppercase.slice(10,23));
  }
  if (includeSpecial === true) {
    specialChars = specialChars.slice(specialChars);
    selectedCharacters.push(generateRandom(specialChars));
    //console.log(generateRandom(specialChars));
    //console.log(specialChars.slice(1,8));
  }
  if (includeNumber === true) {
    //numbers = numbers.slice(numbers);
    selectedCharacters.push(generateRandom(numbers));
    //console.log(generateRandom(numbers));
  }
  
  //for (var i = 0; i 
}





//var passwordSelected = {
  //length: length,
  //specialChars: specialChars,
  //numbers: numbers,
  //lowercase: lowercase,
  //uppercase: uppercase,
//};

//eturn passwordSelected;
//}

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
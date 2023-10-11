// Assignment Code

var characters = []
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|', '~', '`', "'", '"', '\\'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var pslength = prompt("Password must be between 8-128 characters. How many characters would you prefer? ")
  if (pslength < 8 || pslength > 128 || isNaN(pslength)) {
    alert("Dummy 8-128 characters, Duh")
    generatePassword()
  }
  var lowercase = confirm(" Would you like lowercase letters in your password?")
  console.log(lowercase)
  var uppercase = confirm("Would you like a uppercase letters in your password?")
  var special = confirm("Would you like a special character in your password?")
  var number = confirm("Would you like a number in your password?")
  if (!lowercase && !uppercase && !special && !number) {
    alert("Dummy, you need at least one character to make a passowrd, Duh.")
    generatePassword()
  }
  if (lowercase) {
 characters=characters.concat(lowercase)
  }

  if (uppercase) {
 characters=characters.concat(uppercase)
   }

  if (special) {
    characters=characters.concat(Special)

      }
  if (number) {
    characters=characters.concat(number)
  }
var password=""
for (i=0; i<pslength; i++){
  var randomletter=characters[Math.floor(Math.random()*characters.length)]
  password=password.concat(randomletter)
}
console.log(password)
return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

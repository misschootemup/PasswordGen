// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var pslength = prompt("Password must be between 8-128 characters. How many characters would you prefer? ")
  if (pslength < 8 || pslength > 128 || isNaN(pslength)) {
    alert("Dummy 8-128 characters, Duh")
    return "Please try again."
  }
  var lowercase = confirm(" Would you like lowercase letters in your password?")
  var uppercase = confirm("Would you like a uppercase letters in your password?")
  var special = confirm("Would you like a special character in your password?")
  var number = confirm("Would you like a number in your password?")
  if (!lowercase && !uppercase && !special && !number) {
    alert("Dummy, you need at least one character to make a passowrd, Duh.")
    return "Please try again."
  }
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

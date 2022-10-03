// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function is what generates the password for the 'writePassword' function.
function generatePassword() {
  var answer = window.prompt("How many characters (8-128) will the password be?")

  var characterlength = parseInt(answer)

  if (isNaN(characterlength)) {
    window.alert("Amount of characters must be a NUMBER between 8-128 characters long.")
    return
  }

  if (characterlength < 8 || characterlength > 128) {
    window.alert("Amount of characters must be a NUMBER between 8-128 characters long.")
    return
  }
  
  var passnum = window.confirm("Do you want numeric characters in the generated password?")
  var passspecial = window.confirm("Do you want special characters in the generated password?")
  var passupper = window.confirm("Do you want uppercase characters in the generated password?")
  var passlower = window.confirm("Do you want lowercase characters in the generated password?")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
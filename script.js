// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function is what generates the password for the 'writePassword' function.
function generatePassword() {
  var lengthprompt = window.prompt("How many characters (8-128) will the password be?")

  var characterlength = parseInt(lengthprompt)
// Checks to see is the prompt input is a number that can be converted to an integer. If not then the prompt returns.
  if (isNaN(characterlength)) {
    window.alert("Amount of characters must be a NUMBER between 8-128 characters long.")
    return
  }
// Checks that the inputed length is between 8-128 characters. If not the prompt returns.
  if (characterlength < 8 || characterlength > 128) {
    window.alert("Amount of characters must be a NUMBER between 8-128 characters long.")
    return
  }
// Window prompts are added in with their associated arrays
  var passnum = window.confirm("Do you want numeric characters in the generated password?")
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  
  var passspecial = window.confirm("Do you want special characters in the generated password?")
  var specialcharacters = ["!","@","#","$","%","^","&","*","?","~"]
  
  var passupper = window.confirm("Do you want uppercase characters in the generated password?")
  var passlower = window.confirm("Do you want lowercase characters in the generated password?")
  
  var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  
  var choices = []
  var finishedpass = ""
// The if statements below check if the user selected ok or cancel to the prompts and then returns the boolean to the choices array
  if (passnum == true) {
    choices= choices.concat(numbers)
  }

  if (passspecial == true) {
    choices=choices.concat(specialcharacters)
  }

  if (passupper == true) {
    choices=choices.concat(uppercaseletters)
  }

  if (passlower == true) {
    choices=choices.concat(lowercaseletters)
  }

// The below for function adds the possible characters, randomizes then, and returns a password with the selected length.
  for (let i = 0; i < lengthprompt; i++) {
    console.log(choices[Math.floor(Math.random() * choices.length - 1)]);
    finishedpass = finishedpass + choices[Math.floor(Math.random() * choices.length - 1)]
  }
  
  return (finishedpass)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Defint the possible characters that can be choosen to be included in the password generator
let lowCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';



// Assignment Code
var generateBtn = document.querySelector("#generate");



function checkCharacters() {
  let userLower = window.confirm("Do you want your password to have lowercase characters? ");
  let userUpper = window.confirm("Do you want your password to have upperrcase characters? ");
  let userNumbers = window.confirm("Do you want your password to have numbers? ");
  let userSpecial = window.confirm("Do you want your password to have special characters? ");

  if (userLower === true) {
    passwordChoices += lowCase
  }
  if (userUpper === true) {
    passwordChoices += upperCase
  }
  if (userNumbers === true) {
    passwordChoices += numbers
  }
  if (userSpecial === true) {
    passwordChoices += specChar
  }

  if (userLower === false && userUpper === false && userNumbers === false && userSpecial === false) {
    checkCharacters();
  } else {
      // define an empty string that will be the password 
      password = ""
      // Once I have possible list of characters, randomly select the number of characters based on length. Store it in a variable
      for ( i = 0;  i < lengthPass; i++ ) {
        let randomChar = Math.floor( Math.random() * lengthPass );
        randomPassword += passwordChoices[randomChar];
      }
      // return the password, this will be calls in the writePassword() function
      return randomPassword;
  }
}

function generatePassword () {
  // Define the possible password characters 
  // Do this in the function so that it erases previous histories of the password every time the function runs
  let passwordChoices="";

  // Generate the prompt for the length variable (convert it to a number for comparison later)
  let lengthPass = parseInt( window.prompt("Select the length of your password: \n Note: must be longer than 8 characters and shorter than 128.") );

  //  Run an if statement to make sure the input is valid
  if (lengthPass <= 8) {
    generatePassword();
  } else if (lengthPass >= 128) {
    generatePassword();
  }

  // Store the prompts for lower/upper/special/numbers
  // Prompts should be booleans
  // Should be a if statement to make sure ATLEAST 1 of the 4 has been checked
  // Javascript confirm --> window.confirm()
  else {
    checkCharacters()
  }
}


// Write password to the #password input
function writePassword() {
  // Display the randomly generated password to the user, alert or return or pseudo element
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

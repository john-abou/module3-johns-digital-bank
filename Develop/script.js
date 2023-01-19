// Define the possible characters that can be choosen to be included in the password generator
let lowCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

// Assignment Code
var generateBtn = document.querySelector("#generate");


// function to define the password characters to be used in the random generator.
function checkCharacters( ) {
  // Define the possible password characters 
  // Do this in the function so that it erases previous histories of the password every time the function runs
  let passwordChoices="";

  // Let user select which characters to include in their password
  let userLower = window.confirm("Do you want your password to have lowercase characters? ");
  let userUpper = window.confirm("Do you want your password to have upperrcase characters? ");
  let userNumbers = window.confirm("Do you want your password to have numbers? ");
  let userSpecial = window.confirm("Do you want your password to have special characters? ");

  // Add selected character types to the storage contrainer for possible password characters
  if (userLower === true) {
    passwordChoices += lowCase;
  }
  if (userUpper === true) {
    passwordChoices += upperCase;
  }
  if (userNumbers === true) {
    passwordChoices += numbers;
  }
  if (userSpecial === true) {
    passwordChoices += specChar;
  }

  // If the user doesn't select any characters --> force them to re-select options
  if (userLower === false && userUpper === false && userNumbers === false && userSpecial === false) {
    checkCharacters();
  } else {
    return passwordChoices;
  }
}

function generatePassword () {
  // Generate the prompt for the length variable (convert it to a number for comparison later)
  let lengthPass = parseInt( window.prompt("Select the length of your password: \n Note: must be longer than 8 characters and shorter than 128.") );

  //  Run an if statement to make sure the input is valid. If it is valid, run it through the checkCharacters
  if (lengthPass <= 8) {
    generatePassword();
  } else if (lengthPass >= 128) {
    generatePassword();
  } else {
    //define an emptry string to be used for the password and get the possible list of characters for the password from checkCharacters() function.
    let posssibleCharacters = checkCharacters();
    let randomPassword = "";

    // Randomly select the number of characters based on length and add them to the empty string
    for ( i = 0;  i < lengthPass; i++ ) {
      let randomChar = Math.floor( Math.random() * lengthPass );
      console.log(posssibleCharacters[randomChar]);
      randomPassword += posssibleCharacters[randomChar];
    }
    // return the password, this will be calls in the writePassword() function
    console.log(randomPassword)
    return randomPassword;
  }
}


// Write password to the #password input
function writePassword() {
  // Display the randomly generated password to the user, alert or return or pseudo element
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Changed the method to .textContent so that the card displays the password for the user.
  passwordText.textContent = "Your password is: \n" + password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

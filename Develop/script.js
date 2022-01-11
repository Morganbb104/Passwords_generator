// Assignment Code  4 types of passwords listed below
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var intSelection = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];


// make an array that will be used to put different types of passwords
var passwordArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  let userlength = prompt("please enter the length of your passwords");
  console.log(userlength);
  if (userlength < 8 || userlength > 128 || isNaN(userlength)) {
    alert("Please type in a number in the range between 8 to 128")
    return
  }
  var userUppercase = confirm("Do you want the Uppercase?")
  var userLowercase = confirm("Do you want the Lowercase?")
  var int = confirm("Do you want the number?")
  var specialchart = confirm("Do you want the special characteristics?")

  console.log(userUppercase)
  console.log(userLowercase)
  console.log(int)
  console.log(specialchart)

  if (userUppercase === true) { passwordArray = passwordArray.concat(upperCase) }
  if (userLowercase === true) { passwordArray = passwordArray.concat(lowerCase) }
  if (int === true) { passwordArray = passwordArray.concat(intSelection) }
  if (specialchart === true) { passwordArray = passwordArray.concat(special) }

  console.log(passwordArray)
  return passwords(userlength)

}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}


//decide length 8-128 characters
//four types characteristics (1)(2)(3)(4)
// (1) 10 decimal numeric numbers from 0-9
// (2) 26 lowercase letters
// (3) 26 uppercase letters
// (4) special characteristcs 


// decide the length of passwords
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

// characters are all the passwords words(1)(2)(3)(4)



function passwords(length) {
  var result = '';
  var characters = passwordArray.join('')
  console.log(characters)
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  console.log(result)
  return result;
}


// console.log(passwords(getRandomIntInclusive(8,128)));


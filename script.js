// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
  console.log("generatePassword function called");
let passwordLength =parseInt( prompt("Please put at least 8 characters and not more than 128 characters"));
if(Number.isNaN(passwordLength)){
  alert("bad length. It has to be a number. Please retry.");
  return "bad length. Password not generated. Please retry."
}
if(passwordLength < 8) {
  alert("password length must be at least 8 characters");
  return "length less than 8 characters. Password not generated. Please retry."
}

if(passwordLength > 128) {
  alert("password length must be less tha 129 characters");
  return "length more than 128 characters. Password not generated. Please retry."
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

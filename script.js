// Assignment Code
var generateBtn = document.querySelector("#generate");
let myLcharacters='abcdefghijklmnopqrstuvwxyz'; 
let myUcharacters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let myNBRcharacters='0123456789'; 
let mySPcharacters='!@#$%^&*()_+';

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
let hasLc = confirm("click ok to include lowercase in password. Cancel to not not include.");
let hasUc = confirm("click ok to include uppercase in password. Cancel to not not include.");
let hasNbr = confirm("click ok to include numbers in password. Cancel to not not include.");
let hasSc = confirm("click ok to include special character in password. Cancel to not not include.");
if(!hasLc && 
  !hasUc &&
  !hasNbr &&
  !hasSc ){
    alert("you have to choose at least one charcater type");
    return  ("you have to choose at least one charcater type. Password not generated. Try again.");
  }
let possiblePasswordCharacters = '';

if(hasLc){
  possiblePasswordCharacters += myLcharacters;
}

if(hasUc){
  possiblePasswordCharacters += myUcharacters;
}

if(hasNbr){
  possiblePasswordCharacters += myNBRcharacters;
}

if(hasSc){
  possiblePasswordCharacters += mySPcharacters;
}

let password='';

for(let i=0; i<passwordLength; i++){
password += possiblePasswordCharacters [Math.floor(Math.random()*possiblePasswordCharacters.length)];
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

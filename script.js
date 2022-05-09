// Get references to the #generate element -- Starter code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input -- Starter code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// This is decalring a function that was already being "called" by the starter code -- generatePassword. It prompts the user to enter a number between 8-128, otherwise it returns them to the beginning.
function generatePassword() {
  var passwordLength = prompt("Please enter a number of characters between 8-128 you would like for your password");
  if (passwordLength > 128) {
    alert("Must be less than 128 characters");
    return
}
  if (passwordLength < 8) {
    alert("Minimum length is 8 characters");
    return
}  // These next pop up confirmation boxes are for the user to input a yes or no for password properties, if none are selected it returns them to the beginning with a message.
  var lowercase = confirm("Include lowercase letters in your password?"); 
  var uppercase = confirm("Include UPPERCASE letters in your password?");
  var numeric = confirm("Include numbers in your password?");
  var special = confirm("Include special characters (!#$%&'()*+,-.:;<=>?@[]^_`{|}~) in your password?");
    if ((lowercase == false) && (uppercase == false) && (numeric == false) && (special == false)) {
      alert("At least one selection must be made to generate password.");
    return
} // This part is to input, define, and combine the strings for each password property type based on what was selected above into the empty variable at the top.
var passwordChar = ""
  if (lowercase == true)
    passwordChar = passwordChar.concat("abcdefghijklmnopqrstuvwxyz");
  if (uppercase == true)
    passwordChar = passwordChar.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (numeric == true)
    passwordChar = passwordChar.concat("0123456789");
  if (special == true)
    passwordChar = passwordChar.concat("!#$%&'()*+,-.:;<=>?@[]^_`{|}~");
    console.log(passwordChar);
    console.log(passwordChar.length);
// This for loop is to take the user input of passwordLength and randomly select from the above concatenated string, using charAt to pull a 
var password = "";
for (var i = 0; i < passwordLength; i++) {
  password += passwordChar.charAt(Math.random() * passwordChar.length);
  console.log(password);
} 
return password 
}
// Add event listener to generate button -- Starter code
generateBtn.addEventListener("click", writePassword);
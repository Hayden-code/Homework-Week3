var generateBtn = document.querySelector("#generate");
var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var SC = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
var characterNum = document.getElementById("character")

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];
  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
  });
  return values;
}

function generatePassword() {
  var values = getSelectedCheckboxValues('checkbox')
  var password = ''
  var pwordLength = document.querySelector("#characters").value;
  if (values.includes("Lowercase")){
    if (values.length = 3){
      values.length = 2
    }
    function returnCharacter(){
      var abcIndex = Math.floor(Math.random() * abc.length);
      var abcChosen = abc[abcIndex];
      return abcChosen;
    }
    for (var i = 0; i < pwordLength / values.length; i++) {
      password += returnCharacter();
    }
  }
  if (values.includes("Uppercase")){
    function returnCharacter(){
      var abcIndex = Math.floor(Math.random() * abc.length);
      var abcChosen = abc[abcIndex];
      return abcChosen;
    }
    for (var i = 0; i < pwordLength / values.length; i++) {
      password += returnCharacter().toUpperCase();
    }
  }
  if (values.includes("Number")){
    function returnNumber(){
      var randomNum = Math.floor(Math.random() * 10);
      return randomNum;
    }
    for (var i = 0; i < pwordLength / values.length; i++) {
      password += returnNumber();
    }
  }
  if (values.includes("specialCharacter")){
    function returnSC(){
      var SCIndex = Math.floor(Math.random() * SC.length);
      var SCChosen = SC[SCIndex];
      return SCChosen;
    }
    for (var i = 0; i < pwordLength / values.length; i++) {
      password += returnSC();
    }
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
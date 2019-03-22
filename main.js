const button = document.querySelector('#check');
const output = document.querySelector('#output');

function telephoneCheck(str) {
let checkNumsRegex = new RegExp(/[0-9]/g);
let checkNums = str.match(checkNumsRegex);

let checkParenRegex = new RegExp(/[()]/g);
let checkParens = str.match(checkParenRegex);

let checkAlphaRegex = new RegExp(/[a-z]/ig);
let checkAlphas = str.match(checkAlphaRegex);

console.log('has alpahs?', str, checkAlphas);

if(str.length < 1){
  console.log(str, "A number was not entered.");
  output.innerText = `A number must be entered to check for validation!`;
  return false;
}
if(checkAlphas){
  console.log(str, "Only enter numbers.");
  output.innerText = `Only numbers must be entered to check for validation!`;
  return false;
}
if (Number.isInteger(str[0])){
    console.log(str[0], " is not a number");
    output.innerText = `No! "${str}" is not a valid telephone number!`;
    return false;
  }
if(!(checkNums.length >= 10 && checkNums.length < 12)){
    console.log('Incorrect Amount');
    output.innerText = `No! "${str}" is not a valid telephone number!`;
    return false;
  }
if(str.match(checkParenRegex) && str.match(checkParenRegex).length !== 2 ){
    console.log('incorrect parenthesis');
    output.innerText = `No! "${str}" is not a valid telephone number!`;
    return false;
  }
if(checkNums.length > 10){
    if(str[0] != 1){
      console.log(str[0] == 1, 'not 1');
      output.innerText = `No! "${str}" is not a valid telephone number!`;
      return false;
    }
  }
if(checkParens && checkParens.length === 2 && str[11]){
    if(str[11] === checkParens[1]){
      output.innerText = `No! "${str}" is not a valid telephone number!`;
      return false;
    }

  }

  console.log()
  output.innerText = `Yes! "${str}" is a valid telephone number!`;
  return true;

}

button.addEventListener('click', function(e){
  e.preventDefault();
  let input = document.querySelector('#user-input').value;
  telephoneCheck(input);
});

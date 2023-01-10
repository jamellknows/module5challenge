// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  /// generate one box that will get choices from user
      const div = document.createElement('div')
      div.className = "checkbox"
      const card = document.querySelector('.card-body')
      card.appendChild(div)
      div.innerHTML = 
      `<form id="form" onsubmit ="return false">
      <input type="number" id="length" name="length" min="10" max="64" required>
      <label for="length">password length</label><br>
      <input type="checkbox" id="upperCase" name="upperCase" value="upperCase">
      <label for="upperCase">uppercase charaters</label><br>
      <input type="checkbox" id="lowerCase" name="lowerCase" value="lowerCase">
      <label for="lowerCase">lowercase characters</label><br>
      <input type="checkbox" id="special" name="special" value="special">
      <label for="special">special characters</label><br>
      <button id="submit" onclick="writePassword(event)">Submit</button> 
    </form>`
    let submit = document.getElementById('submit')
    submit.addEventListener('click', function(e){
      let form = document.getElementById('form')
      let length = document.getElementById('length').value
      if(length > 64 || length < 10)
      {
        return 
      }
      else 
      {
        let upper = document.getElementById('upperCase').checked
        let lower = document.getElementById('lowerCase').checked
        let special = document.getElementById('special').checked
        upper = (upper == true) ? true : false
        lower = (lower == true) ? true : false
        special = (special == true) ? true : false
        generatePassword(length, upper, lower, special)
        

      }


      
    
  
})
    
    

   


}


// Function for getting a random element from an array
function getRandom(arr) {
  let rand = Math.floor(Math.random()*(arr.length - 1) )
  return arr[rand]

}

// Function to generate password with user input
function generatePassword(length, upper, lower,special) {

  let pass = new String()
  if(upper && special && lower)
  {
    let available = [...lowerCasedCharacters,...numericCharacters, ...upperCasedCharacters, ...specialCharacters]
    for(let i = 0; i < length - 1; i++)
    {
      pass += getRandom(available)
    }

  }
  else if(upper && lower)
  {
    let available = [...lowerCasedCharacters,...numericCharacters, ...upperCasedCharacters]
    for(let i = 0; i < length - 1; i++)
    {
      pass += getRandom(available)
    }  
  }
  else if(special && lower)
  {
    let available = [...lowerCasedCharacters,...numericCharacters,...specialCharacters]
    for(let i = 0; i < length - 1; i++)
    {
      pass += getRandom(available)
    }  
  }
  else if(lower)
  {
    let available = [...lowerCasedCharacters,...numericCharacters]
    for(let i = 0; i < length - 1; i++)
    {
      pass += getRandom(available)
    }  
  }
  else if (upper)
  {
    let available = [...upperCasedCharacters,...numericCharacters]
    for(let i = 0; i < length - 1; i++)
    {
      pass += getRandom(available)
    } 

  }
  else if (special)
  {
    let available = [...specialCharacters,...numericCharacters]
    for(let i = 0; i < length - 1; i++)
    {
      pass += getRandom(available)
    } 
  }
  else
  {
    let available = [...numericCharacters]
    for(let i = 0; i < length; i++)
    {
      pass += getRandom(available)
    } 

  }
  writePassword(pass)
      
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword(pass) {
  

  let password = pass
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);

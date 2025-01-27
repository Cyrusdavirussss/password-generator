// Step 1: Grab the button and input fields

const generateBtn = document.querySelector(".btn")
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2")
const includeSymbolsCheckbox = document.getElementById("include-symbols")
const includeNumbersCheckbox = document.getElementById("include-numbers")


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
const numbers = "0123456789".split("")
const symbols = "!@#$%^&*()-_=+[]{}<>?".split("")


// Step 2: Add event listener to the button
generateBtn.addEventListener("click", function(){
    generatePasswords()
})


// Step 3: Function to generate random passwords
function generatePasswords() {
     const characters = updateCharacters()

    let passwordLength = 15 
    let password1 = ""
    let password2 = ""
    
    for (let i = 0; i < passwordLength; i++) {
        // Generate a random index for the characters array
        password1 += characters[Math.floor(Math.random() * characters.length )]
        password2 += characters[Math.floor(Math.random() * characters.length )]

    }
    
    // Display the generated passwords in the input fields
    password1El.value = password1
    password2El.value = password2
        
    includeSymbolsCheckbox.checked = false;
    includeNumbersCheckbox.checked = false;
        
    password1El.style.color = "#5DEF92"
    password2El.style.color ="#5DEF92"
}


function updateCharacters() {
    let characters = [...letters]
    
    if (includeSymbolsCheckbox.checked) {
        characters = characters.concat(symbols)
    } 
    
    if (includeNumbersCheckbox.checked) {
        characters = characters.concat(numbers)
    }
    
    return characters
}


// step 1: “We created 3 const variables to grab the button and input fields using the DOM method querySelector and getElementById. I also have a variable characters that is an array with all the characters we need to create the password.”

// step 2: “We added an addEventListener to the button that listens for the click event and, when clicked, it calls the generatePasswords() function.”

// step 3:  “Inside the generatePasswords() function, I created a variable passwordLength = 12 and 2 variables for password1 and password2 as empty strings.”

// loop explanation: “Inside the loop, I use Math.random() and Math.floor() to pick a random character from the characters array. I append each randomly selected character to password1 and password2, building two 12-character passwords.”

// Displaying the password: “Finally, to display it on the input field, we use password1El.value = password1 and the same for password2.”



// Step 1: Add event listeners to input fields
password1El.addEventListener("click", function() {
    copyToClipBoard(password1El)
})

password2El.addEventListener("click", function() {
    copyToClipBoard(password2El)
})

// Step 2: Function to copy text to clipboard
function copyToClipBoard(inputfield) {
    inputfield.select() // Select the text inside the input field
    document.execCommand("copy") // Copy the text to the clipboard
    
    // Deselect the text to remove highlighting
    window.getSelection().removeAllRanges()
    
    // Change the text color for feedback
    inputfield.style.color = "#ECFDF5"
    
    setTimeout(function() {
        inputfield.style.color = "#55F991" // Reset to original green color
    }, 3000) // 3-second delay
}


// The toggle ON/OFF symbols/numbers.
// So we created 2 variables includeSymbolsCheckbox and includeNumbersCheckbox we grab the elements from the html via method getElementByID. 

// We created 3 string variables, letters numbers symbols, each variable has strings according to letters numbers and symbols. 
// We used a method .split("") to split each string on its own? Am guessing? Correct me if am wrong on this please.

// Next is we created a function  updateCharacters() inside of this function we created a array variable characters = [...letters] this will always include letters by default 

// And we used if statement add symbols if checked  and add numbers if checked ( includeSymbolsCheckbox.checked & includeNumbersCheckbox.checked 

// Then we return the updated characters array. 

// And now in the generatePassword() function we call the updateCharacters() function with the updated characters array. 
let charLength = document.getElementById('char-length')
let range = document.getElementById('password-range')


//function to get the length of Password to be generated
//Display Default value of the Character length on Page Load
window.addEventListener("load",() =>{
    charLength.innerHTML = range.value
})
//Display value of Password to be generated when slider has been changed
range.addEventListener("input", () => {
    charLength.innerHTML = range.value;
});
// End of function to generate length of password

//checkbox for uppercase, lowercase, symbols and Numbers
let upperCase = document.getElementById('uppercase')
let lowerCase = document.getElementById('lowercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
//Generate password button
let generatePass = document.getElementById('btnGenerate')
//Panel that displays generated password
let passwordView = document.getElementById('passwordView')
//icon to copy password
let copyPass = document.getElementById('copy-password')

let oneFill = document.getElementById('oneFill')
let twoFill = document.getElementById('twoFill')
let threeFill = document.getElementById('threeFill')
let fourFill = document.getElementById('fourFill')

// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_+-=|/<>*@#$%^&()';
const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
const numberLetter = '0123456789'
const symbolLetter = '_+-=|/<>*@#$%^&()'



generatePass.addEventListener("click", () => {
    let combined =""
    if (upperCase.checked == true){
        combined = combined.concat(upperLetter)
    }
    if(lowerCase.checked == true){
        combined= combined.concat(lowerLetter)
    }
    if(numbers.checked == true){
        combined= combined.concat(numberLetter)
    }
    if(symbols.checked == true){
        combined= combined.concat(symbolLetter)
    }
    //Generate Password
        let result = '';
        const charactersLength = combined.length;
        for ( let i = 0; i < range.value; i++ ) {
            result += combined.charAt(Math.floor(Math.random() * charactersLength));
        }
        passwordView.textContent = result;
        if(result.length > 0){
            copyPass.style.visibility ="visible"
        }

        //Display the strength of the Password Generated
        
        if(result.length <= 5){
            oneFill.style.background = "orange"
            twoFill.style.background = "black"
            threeFill.style.background = "black"
            fourFill.style.background = "black"
            
        }
        
        
        
})

// function copy Password to ClipBoard

copyPass.addEventListener('click', () =>{
    let copyText = document.getElementById('passwordView')
    let passwordStorage = document.createElement('textarea')
    passwordStorage.value = copyText.textContent
    let displayPassword = document.querySelector('.display-password');
    displayPassword.appendChild(passwordStorage);
    //Select the text to be copied
    passwordStorage.select();
    passwordStorage.setSelectionRange(0,99999);
    navigator.clipboard.writeText(passwordStorage.value)
    copyPass.setAttribute('title') = "Your Password has been Copied"
    // Alert the Copied Text

    alert(`Copied Text is ${copyText.textContent}`)
})



// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }
// console.log(generateString(12))

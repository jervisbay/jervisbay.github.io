// Define function to generate password

function askForCriteria() {
    var passwordLength = prompt("How many characters do you want your password to be?  (Between 8 and 128 characters)");
    passwordLength = parseInt(passwordLength);



    // Check if password is numeric and between 8 and 128 characters
    if (passwordLength >= 8 && passwordLength <= 128) {

        // Check number of characters
        console.log("Password of " + passwordLength + " characters");

        // Ask if user wants different character types --> boolean values
        var lowerCase = confirm("Do you want a lowercase character in the password?");
        var upperCase = confirm("Do you want an uppercase character in the password?");
        var numeric = confirm("Do you want a numeric character in the password?");
        var specialCharacter = confirm("Do you want special characters in the password? !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    }

    // Rerun function if password length is invalid
    else {
        alert("Please try again");
        askForCriteria();
    }


    // Changing variables based on confirms above
    if (lowerCase) {
        lowerCase = "yes";
        lowerCaseOutput = "lowercase characters";
    } else {
        lowerCase = "no";
        lowerCaseOutput = "no lowercase characters";
    }

    if (upperCase) {
        upperCase = "yes";
        upperCaseOutput = "uppercase characters";
    } else {
        upperCase = "no";
        upperCaseOutput = "no uppercase characters";
    }

    if (numeric) {
        numeric = "yes";
        numericOutput = "numeric characters";
    } else {
        numeric = "no";
        numericOutput = "no numeric characters";
    }

    if (specialCharacter) {
        specialCharacter = "yes";
        specialCharacterOutput = "special characters";
    } else {
        specialCharacter = "no";
        specialCharacterOutput = "no special characters";
    }


    // Alert user what kind of password he / she wants
    alert("You want a " + passwordLength + " character password with " + lowerCaseOutput + " and with " + upperCaseOutput + " and with " + numericOutput + " and with " + specialCharacterOutput);

    // Define character sets based on user inputs above

    if (lowerCase === "yes" && upperCase === "no" && numeric === "no" && specialCharacter === "no") {
        var characterSet = "abcdefghijklmnopqrstuvwxyz";
    } else if (lowerCase === "yes" && upperCase === "yes" && numeric === "no" && specialCharacter === "no") {
        var characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (lowerCase === "yes" && upperCase === "yes" && numeric === "yes" && specialCharacter === "no") {
        var characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    } else if (lowerCase === "yes" && upperCase === "yes" && numeric === "yes" && specialCharacter === "yes") {
        var characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (lowerCase === "no" && upperCase === "yes" && numeric === "yes" && specialCharacter === "yes") {
        var characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (lowerCase === "no" && upperCase === "no" && numeric === "yes" && specialCharacter === "yes") {
        var characterSet = "1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (lowerCase === "no" && upperCase === "no" && numeric === "no" && specialCharacter === "yes") {
        var characterSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (lowerCase === "no" && upperCase === "yes" && numeric === "no" && specialCharacter === "no") {
        var characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (lowerCase === "no" && upperCase === "yes" && numeric === "yes" && specialCharacter === "no") {
        var characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    } else if (lowerCase === "no" && upperCase === "yes" && numeric === "yes" && specialCharacter === "yes") {
        var characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (lowerCase === "no" && upperCase === "no" && numeric === "yes" && specialCharacter === "no") {
        var characterSet = "1234567890";
    } else if (lowerCase === "yes" && upperCase === "no" && numeric === "yes" && specialCharacter === "yes") {
        var characterSet = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (lowerCase === "yes" && upperCase === "no" && numeric === "yes" && specialCharacter === "no") {
        var characterSet = "abcdefghijklmnopqrstuvwxyz1234567890";
    } else if (lowerCase === "yes" && upperCase === "no" && numeric === "no" && specialCharacter === "yes") {
        var characterSet = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (lowerCase === "yes" && upperCase === "yes" && numeric === "no" && specialCharacter === "yes") {
        var characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } else if (lowerCase === "no" && upperCase === "yes" && numeric === "yes" && specialCharacter === "no") {
        var characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    } else {
        alert("That's weird...");
    }

    // Check for proper character set based on inputs
    console.log("Lowercase: " + lowerCase);
    console.log("Uppercase: " + upperCase);
    console.log("Numeric: " + numeric);
    console.log("Special Characters: " + specialCharacter);
    console.log("This is the character set to be used: " + characterSet);


    var password = '';

    for (i = 0; i < passwordLength; i++) {
        var c = Math.floor(Math.random() * characterSet.length + 1);
        password += characterSet.charAt(c)
    }

    console.log(password);

    document.getElementById("passwordHolder").innerHTML = password;

    // This is the end of the ask for criteria function (like a wrapper)
}
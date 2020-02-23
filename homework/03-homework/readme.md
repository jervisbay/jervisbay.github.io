### Homework 3

## Password Generator
This is a website that generates passwords through a combination of 
1) lower case characters,
2) UPPERCASE characters,
3) numeric characters,
4) special characters

On button click, the user is first prompted to input how long of a password (in terms of number of characters) is desired.

The password has to be between 8 and 128 characters.  An invalid input will restart the process.

The user is then asked to confirm whether he / she would like to include the above 4 criteria in the password.  

The password is generated and shown in the placeholder textbox.

On button click, the user can copy the generated password into clipboard.

## HTML file
Created html layout using bootstrap.css, mainly using the 'card' containers.
Created buttons that would utilize the function from javascript when it is clicked.

## CSS file
Created simple css file (style.css) to for some basic formatting

## Javascript file 

## Generating the password
Entire code is wrapped within an 'askForCriteria()' function.

First prompts user to enter a desired password length between 8 and 128 characters.  If length is an invalid value, user is alerted and the function called again.

User is then asked to confirm desired elements of the password (using boolean values).

A character set is then created based on the user confirms and stored in an array.

A for loop is created to keep incrementing as long as variable is less than the user's desired password length.

Within this for loop, a random number is generated based on the length of the created character set and is used to select the character (by index number) within the created character set.  

A variable is created to store the password and as the for loop continues, the randomly selected character is appended to the password.

Finally, the generated password replaces the placeholder text within the textbox

## Copying the generated password to clipboard

Copy to clipboard functionality built by creating a range within the document and using an execCommand("copy") method.

Created a second button for a function that copies the created password, similar to how Dashlane or Lastpass would work
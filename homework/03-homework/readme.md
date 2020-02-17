### Homework 3

## HTML file
Created html layout using bootstrap.css, mainly using the 'card' containers.
Created button that would utilize the function from javascript when it is clicked

## CSS file
Created simple css file (style.css) to format html file a little

## Javascript file 
Entire code is wrapped within an 'askForCriteria()' function.

First prompts user to enter a desired password length between 8 and 128 characters.  If length is an invalid value, user is alerted and the function called again.

User is then asked to confirm desired elements of the password (using boolean values).

A character set is then created based on the user confirms and stored in an array.

A for loop is created to keep incrementing as long as variable is less than the user's desired password length.

Within this for loop, a random number is generated based on the length of the created character set and is used to select the character (by index number) within the created character set.  

A variable is created to store the password and as the for loop continues, the randomly selected character is appended to the password.

Finally, the generated password replaces the placeholder text within the textbox
# Week 9 NodeJS

## A Few Basics...
---
### Installing Node
1. Go here and download whatcha need https://nodejs.org/en/download/.
2. In your terminal run ```node -v```. If it spits back a version number then you're good to go

### NPM and package.json explained
The package.json file contains details about a javascript project. It contains dependencies that are basically external libraries/packages that the codebase that the package.json is in depends on. When running ```npm install```, it will look for a package.json file in the director that the command was run in, and then install all the dependencies in the "dependencies" property into a node_modules folder. Those node modules can then be imported into the code by using ```require```. 

### Running the Node Console
In your terminal run the following:
```
$ node
```
If successful, you should see a ">" indicating that you are in the Node console. From here, you can run any javascript code you'd like. Below is an example of entering the node console and then executing an the map array method on an array
```javascript
$ node
> [1, 2, 3, 4].map(x => x / 2);
[ 0.5, 1, 1.5, 2 ]
> 
```

<br>

## Class Activities (New Syntax)
---

### Running a JavaScript File using Node (Activities 1, 2)
In your terminal run the following (Note: replace "index" with whatever your javascript file name is)
```
$ node index.js
```

### ```process.argv``` (Activities 3, 4)
```process``` is a built in global object (ie accessible in any javascript file without importing any external libraries or packages) that provides information about and control over the Node.js process<sup>[source](https://nodejs.org/api/process.html#process_process)</sup>. If the concept of "process" is confusing for you, simply think of it like this: when you execute your javascript file by running it with Node, your computer must start a process for that (just like any other computer program you might run, for example Microsoft Word). Whenever you go to the task manager (Windows) or activity monitor (Mac) and go to the processes tab and see all the different processes running, that is <i>LITERALLY</i> what it is, and you will see an entry for a "Node" process there.

![](./node_process_activity_monitor.png)


```process.argv``` is a property of the process object. It is an array that represents the command line arguments used to run the Node process. The first entry in the array will always be the location where node is saved, as node is always the first argument in order to, well, run Node. If you were to run a javascript file with the following arguments, process.argv would look like the following:
```
$ node path/to/index.js spongebob squarepants

// process.argv
['path/to/node', 'path/to/index.js', 'spongebob', 'squarepants']
```
If you are confused about what I mean by the location where node is saved, if I simply run node without a file, and then see what process.argv is, the only entry in it points to the file path in my computer where node was installed: 
```
Waynes-Air:~ wayne$ node
> process.argv
[ '/usr/local/Cellar/node@10/10.19.0/bin/node' ]
> 
```

### ```fs.readFile```<sup>[doc](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)</sup> (Activity 5)
```readFile``` is part of Node's standard library package (ie a built in package) called ```fs```. As you might guess from the name of the function, the ```readFile``` function will read the contents of an indicated file in your file system.

Syntax (for the purposes of this course):
```javascript
var fs = require('fs'); // need to import the built in fs library
fs.readFile(fileName, encoding, callback);
```
Parameters:
* ```fileName```: the file to be read in 
* ```encoding```: the type of encoding that the file should be read in as
* ```callback```: the callback function to execute after readFile has finished executing.
    * Parameters:
        * <b><i>error</i></b>: if an error occurs while reading the file, this parameter will be set to the error that occured
        * <b><i>data</i></b>: this is set to the contents of the file

Example: 
```javascript
var fs = require('fs');

// this reads in a file located at docs/budget/mar_budget.csv and encodes it as "UTF-8". It then displays the error if an error occurs, otherwise it displays the contents if the file was read in properly
fs.readFile("docs/budget/mar_budget.csv", "utf8", function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    } 
})
```

### ```fs.writeFile```<sup>[doc](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)</sup> (Activity 6)
```writeFile``` is part of Node's standard library package (ie a built in package) called ```fs```. As you might guess from the name of the function, the ```writeFile``` function will write the content that it is given to a specified file. 

<b>Important usage note: if the specified file doesn't exist, it will create it. But if the specified file does exist, <i>it will overwrite it with the new content</i>.</b>

Syntax (for the purposes of this course):
```javascript
var fs = require('fs'); // need to import the built in fs library
fs.writeFile(fileName, data, callback);
```
Parameters:
* ```fileName```: the file to be written to 
* ```data```: the data to be written to the specified file
* ```callback```: the callback function to execute after writeFile has finished executing.
    * Parameters:
        * <b><i>error</i></b>: if an error occurs while writing the file, this parameter will be set to the error that occured

Example: 
```javascript
var fs = require('fs');

// this writes the string in the textContent variable to a file at docs/dr_suess/green_eggs_and_ham.txt. If an error occurs while writing the file, it will display the error. Otherwise, after the file has finished writing it will display "File successfully written!"
var textContent = "Would you like green eggs and ham?";
fs.readFile("docs/dr_suess/green_eggs_and_ham.txt", textContent, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("File successfully written!");
    } 
})
```

### ```fs.appendFile```<sup>[doc](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback)</sup> (Activity 7)
```appendFile``` is part of Node's standard library package (ie a built in package) called ```fs```. As you might guess from the name of the function, the ```appendFile``` function will append the content that it is given to the already existing content in a specified file. If the file does not exist yet, it will create it.

Helpful usage note: If you want the content you want appended on a new line, make sure you utilize ```"\n"``` in your text content. That string is interpreted as a new line 

Syntax (for the purposes of this course):
```javascript
var fs = require('fs'); // need to import the built in fs library
fs.appendFile(fileName, data, callback);
```
Parameters:
* ```fileName```: the file to append content to 
* ```data```: the data to be appended to the specified file
* ```callback```: the callback function to execute after appendFile has finished executing.
    * Parameters:
        * <b><i>error</i></b>: if an error occurs while appending to the file, this parameter will be set to the error that occured

Example: 
```javascript
var fs = require('fs');

// this appends the string in the textContent variable to the file at docs/dr_suess/green_eggs_and_ham.txt. If an error occurs while writing the file, it will display the error. Otherwise, after the file has finished writing it will display "File successfully updated!". Also note that the string will be placed on a new line as \n is at the start of the string (imagine if you pressed the enter key and then typed all of that on an existing file, that is basically what its doing)
var textContent = "\nI DO NOT LIKE GREEN EGGS AND HAM! I DO NOT LIKE THEM, SAM-I-AM."; // what a jerk
fs.readFile("docs/dr_suess/green_eggs_and_ham.txt", textContent, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("File successfully updated!");
    } 
})
```

### Exporting modules with ```module.exports``` (Activities 8, 9)
This allows you "export" variables and functions you've declared in one file, and import them for use in another file.

In the example below, we export a variable and a function from exportExample.js. We have a file called importExample.js that is in the same folder as exportExample.js, and we import exportExample.js into importExample.js using ```require```. After importing the file we are able to access the exported variables and methods of the imported file. 

```javascript
/*** exportExample.js ***/
var myVar = "wayne";
var myOtherVar = "sun";

var myFunc = function() {
    console.log(myVar + " is awesome!");
}

// in this example we are exporting myVar (as firstName) and myFunc, but NOT myOtherVar
module.exports = {
    firstName: myVar,   // firstName is the alias in which we export myVar
    myFunc: myFunc
}
```
```javascript
/*** importExample.js ***/
var exportExample = require('./exportExample.js');  // import exportExample.js

console.log(exportExample.myVar);       // you might expect this to print out 'wayne', but it actually throws an error because we exported myVar under the alias of "firstName", so this file has no idea what "myVar" actually is
console.log(exportExample.firstName);   // will print out 'wayne'
console.log(exportExample.myOtherVar);  // this will throw an error as myOtherVar was never exported
console.log(exportExample.myFunc())     // this will print out 'wayne is awesome!'
```

### Arrow Functions (ES6) (Activities 16, 17)
A different way to declare functions. There are two main differences between arrow functions and the standard ES5 functions: the context of ```this``` and the ability to return a value without the return statement (ES6). Highly recommend reading a very easy to understand explanation [here](https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e).

||ES5|ES6|
|---|---|---|
|Syntax|```function() {...}```|```() => {...}```<br>```() => returnValue // one line (without the brackets) returns the returnValue```|
|Example|```function() { return true }```|```() => true```|
|Context of ```this```|The context in which the function is <i><b>called</b></i>|The context in which the function is <i><b>defined</b></i>|
----------

```javascript
var obj = {
    a: true,
    myEs5Func: function() {
        console.log(this.a);
    },
    myEs6Func: () => {
        console.log(this.a);
    }
};

obj.myEs5Func();    // true - (obj is what calls myEs5Func, thus the context of this is set to obj)
obj.myEs6Func();    // undefined - (the context in which myEs6Func was defined is the global context of the entire file)
```

If you are still confused, you should seriously the really easy to read explanation [here](https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e).

### ```var```, ```let```, and ```const``` (Activities 18, 19)

||```var```|```let```|```const```|
|---|:---:|:---:|:---:|
|Hoisted (global scope)|Yes|No|No|
|Can be declared more than once|Yes|No|No|
|Can reassign value|Yes|Yes|No|
```javascript
var a = 1;      // variable declaration
a = 2;          // reassigning value (OK)
var a = 3;      // redeclaring variable (OK)

let b = 1;      // variable declaration
b = 2;          // reassigning value (OK)
let b = 3;      // ERROR! You CANNOT redeclare a variable that is declared using let

const c = 1;    // variable declaration
c = 2;          // ERROR! You CANNOT reassign a value to a variable declared using const
c = 3;          // ERROR! You CANNOT redeclare a variable that is declared using const

const constObj = {
    a: 1;
    b: 2;
}
constObj['c'] = 3;  // This is legal as you aren't actually reassigning the value

const constArr = [1, 2, 3];
constArr.push(4);   // This is legal as you aren't actually reassigning the value
```

Note on hoisting: When using var to declare a variable, that variable is hoisted and therefore globally scoped. When a variable is hoisted, it is declared at the top of the file with no value, and then assigned the value at the spot where it was supposed to have been declared (see example below). The following two code snippets are equivalent:
```javascript
// top of file

// ...

// some code

for (var i = 0; i < 5; i++) {
    // do stuff
}

console.log(i); // even though it looks like i is out of scope here, this will not throw an error because of hoisting (this will NOT work with let or const)

```
```javascript
// top of file  
var i;  // hoisting: interpreter sees "var i = 0" and declares var i at the top of the file without assigning value. then when it is supposed to be used it assigns the value

// ...

// some code

for (i = 0; i < 5; i++) {
    // do stuff
}

console.log(i);

```
The above example would not fly if you used ```let``` or ```const``` to declare ```i```.

### ```forEach()```<sup>[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)</sup> (Activity 21)

This array method iterates through an array. It takes a callback function as an argument that gets passed the item at the current index.

Syntax and Example:
```javascript
let arr = [1, 2, 3, 4];

// the following two snippets of code do the same thing
arr.forEach(element => {
    console.log(element);
});

for (let i = 0; i < arr.length; i++) {
    console.log(element);
};
```

### ```map()```<sup>[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)</sup> (Activity 21, 22)

This array method iterates through an array and allows you to modify the element at that index. It takes a callback function as an argument that gets passed the item at the current index. Basically, if you manipulate the item at the current index and return it, the item in the array will be changed to that. See the example

Syntax and Example:
```javascript
let arr = [1, 2, 3, 4];

// with es5 function syntax
arr.map(function(element) {
    return element * 2;
});
// arr now equals [2, 4, 6, 8]

// with es6 function syntax
arr.map(element => element * 2);
```

### ```filter()```<sup>[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)</sup> (Activity 21, 22)

This array method allows you to take an array and "filter" it into a new array in which each element in it passes a certain criteria. It iterates through the array and allows you to see if the element at that index passes a criteria. If it passes (return true) then the element will be kept in the resulting array, otherwise (return false) the element will not be kept in the resulting array. It takes a callback function as an argument that gets passed the item at the current index. Basically, if that item passes the criteria in the callback function, it will be kept in the resulting array. See the example

Syntax and Example:
```javascript
let arr = [1, 2, 3, 4];

// with es5 function syntax
let filteredArr = arr.map(function(element) {
    return element > 2; // this will return true for numbers greater than 2, and false otherwise. thus only numbers greater than 2 will be kept in the filtered array
});
// filteredArr equals [3, 4];

// with es6 function syntax
let filteredArr = arr.map(element => element > 2);
```

### Template Literals (ES6) (Activities 23, 24)
This is just a way to insert variables into strings. The following snippets of code are equivalent and will print out the same thing. The thing to remember for ES6 is to use ``` ` ``` instead of `"`, and the variable you want to place in the string goes inside ```${}```.
```javascript
var x = "exotic";

// ES5
console.log("Joe " + x);    // Joe exotic

// ES6
console.log(`Joe ${x}`);    // Joe exotic
```

### ```for of``` Syntax (Activities 25, 26)
Just another way to write a for loop. However, instead of having the index at each iteration, you have the element at that index. Note the syntax and the difference below (the two examples do the same thing).
```javascript
let arr = [1, 2, 3];

// regular for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// for of syntax
for (const element of arr) {
    console.log(element);
}
``` 

### Rest and Spread Operator (Activities 27, 28)
The rest and spread operator share the same ```...``` syntax, but do slightly different things. A helpful article explaining this with examples can be found [here](https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281).

<b>Spread Operator</b>: "spreads" the values in data types such as objects and arrays. The way I think about it is that it's an easy way to break apart an array or object into its individual components without writing code to iterate through them. The following examples illustrate this:
```javascript
var arr1 = [1, 2 ,3];
var arr2 = [4, 5, 6];

var arr3 = [arr1, arr2]                 // arr3 = [[1, 2, 3], [4, 5, 6]]

// with spread operator
var arr4 = [arr1, arr2]                 // arr4 = [1, 2, 3, 4, 5, 6]
var arr5 = ['a', 'b', 'c', ...arr1]     // arr5 = ['a', 'b', 'c', 1, 2, 3]

// object example
var myObj = {
    a: 1,
    b: 2
}
var myNewObj = {
    ...myObj,
    c: 3
}
// myNewObj = {a: 1, b: 2, c: 3}

// function example
var myFunc = function(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

myFunc(arr1);  
// [1, 2, 3]
// undefined
// undefined

myFunc(...arr1);
// 1
// 2
// 3

```
<b>Rest Operator</b>: Allows you to create a function with an indefinite amount of arguments. The following examples illustrate this:
```javascript
var myFunc(...args) {
    args.forEach(x => console.log(x));
}

myFunc(1);
// 1

myFunc(1, 2, 3);
// 1
// 2
// 3

myFunc(true, 'blue', 2);
// true
// 'blue'
// 2
```
If you think about it, if you have an array stored in ```x```, then ```...x``` spreads apart the array. Thus, you can think of ```...args``` as the spread apart version of an array ```args```. So when you use ```args``` in the function body of a function that takes ```...args``` as an argument, ```args``` is actually an array containing all the comma separated arguments supplied to the function parameter.

### Object (and Array) Destructuring (Activites 29, 30)
This is just a quicker way of declaring a variable and setting the value of it equal to some property in an object (works with array elements too). The best way to demonstrate this is with an example:
```javascript
var myObj = {
    a: 1,
    b: 2, 
    c: 3
};

// original way
var x = myObj.a;
console.log(x);     // prints out 1

// object destructuring
var {a} = myObj.a
console.log(a);     // prints out 1

// object destructuring but setting name of variable to somethign other than name of property
var {a: y} = myObj.a
console.log(y);     // prints out 1

// works with arrays too
var myArr = [1, 2, 3];
var [i, hate, quarantine] = myArr;
console.log(i);             // prints out 1
console.log(hate);          // prints out 2
console.log(quarantine);    // prints out 3
```

### ```JSON.parse()```<sup>[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)</sup> (Activity 31)
Creates a JSON object from the string representation of it.
```javascript
var myString = '{"a": 1, "b": 2"}';
var myObj = JSON.parse(myString); 
myObj.a;    // 1
myObj.b;    // 2
```

### ```JSON.stringify()```<sup>[doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)</sup> (Activity 31)
The opposite of JSON.parse(). It creates a string representation of a JSON object
```javascript
var myObj = {a: 1, b: 2};
var myString = JSON.stringify(myObj);
console.log(myString);      // '{"a": 1, "b": 2"}'
```

### Promises (Activities 34, 35, 36, 37)
Whenever you use ```.then()``` you are utilizing promises. Basically, remember when you made API calls. Depending on your internet connection and various other factors, the time it took for the call to complete and the API to actually return data to you was different. The bottom line though is that they would always get you some data response (whether it was the data itself or some error) regardless of how long it took. In other words, you were <i>promised</i> some data.

So promises in javascript can be thought of in this way. We are waiting for something to happen, and then after that thing happens we then execute some code using the ```.then()``` syntax.

While you are waiting on the promise to give you your data back, the rest of your code is running. In other words, the promise is in a way running in the background while the rest of your code executes. 

In the example below, the intrepreter reads as follows:
* console.log('hi') --> prints out hi
* axios call --> okay, make this call and then once it finishes executing, THEN print out the data that was returned
* console.log('bye') --> prints out bye

<b>Typically, "hi" and "bye" will be printed one after another instead of the result of the API between each. This is because it will only print out the data from the API call ONCE the API call completes. Chances are that will not happen until after hi and bye are printed. This is what I mean by the rest of the code will execute while the API call is running in the background.</b>

```javascript
const axios = require("axios");

console.log('hi');

axios.get("some_api").then(function(res) {
    console.log(res);
});

console.log('bye');
```

### ```async``` ```await``` (Activites 38, 39)
If we have a lot of promises chained together we can result in callback hell where we end up having a ton of ```.then()```'s inside of each other. This makes code annoying to read. A way around this is to use ```async``` and ```await```. 

You can only use ```await``` within a function that is marked with ```async```. 

```javascript
const axios = require("axios");

async function myFunc() {    
    var res = await axios.get("some_api");
    console.log(res);
}

console.log('hi');

myFunc();

console.log('bye');
```

The example is equivalent in behavior to the example for Promises section before this. Basically the myFunc is labeled as an asynchronous function. Within it, res is set equal to the value of the API call when it eventually returns. Similar to before, "hi" and "bye" will print out first and then the response of the API call will print out when it completes, likely after "hi" and "bye" are printed.
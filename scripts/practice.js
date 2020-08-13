//------------------------------------Arrow Function-------------------------------------

function sum(a, b){
    return a+b;
}

let sum2 = (a,b) => a + b;




function isPositive(num){
    return num >= 0;
}

let isPos = num => num >= 0;




function randomNumber(){
    return Math.random;
}

let random = () => Math.random;



/*

document.addEventListener('click', function() {
    console.log('Click');
})

document.addEventListener('click', () => console.log('Click'));
*/


class Person {
    constructor(name) {
        this.name = name;
    }
    
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        } , 100)
    }
    
    printNameFunction() {
        setTimeout(function(){
            console.log('Function: ' + this.name)
        } , 100)
    }
}


let person = new Person('Bob');

/*

person.printNameArrow(); //This prints out name this.name is the same as this in the scope where it is defined.
person.printNameFunction(); //This doesn't print out name because the scope of this.name is where printNameFunction() gets called.

*/

//---------------------------------Callback Functions------------------------------------

//Usually used on events. So when an event gets triggered such as an event listener, the callback function is called.

// such as this: document.addEventListener('click', () => console.log('Click'));

const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function () {
    console.log("The Button was Pressed.");
});

const NameList = {
    names: [],
    onNewName: null,
    
    init: function (newNameCallback){
        this.onNewName = newNameCallback;
    },
    
    addName: function(name) {
        this.names.push(name);
        this.onNewName(name, this.names);
    }
};

NameList.init((name, allNames) => {
    console.log(name);
    console.log("The current list is: " + allNames);
});

NameList.addName("Timmy");
NameList.addName("Pawel");
NameList.addName("Carmen");
NameList.addName("Sophie");



//------------------------------Regular Expressions-------------------------------------

/*
"Javascript".search(/script/i); // the flag i is to ignore case.

text.replace(/javascript/gi, "JavaScript"); // the gi flag is to replace all matches and ignore case.

"Javascript".match(/a/);
*/

                   
//------------------------------------Errors-------------------------------------------

const err = new Error('Custom Error made by the developer');
//console.log(err);

var someFunc = (a) => {
    if(a === 4){
        throw err;
    }
}

try{
    someFunc(4);
} catch(e) {
    console.log("Logging Custom Error")
    console.log(e)
}

//-------------------------------------Strict mode---------------------------------------
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

//Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.


/*Strict mode makes several changes to normal JavaScript semantics:

Eliminates some JavaScript silent errors by changing them to throw errors.
Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
Prohibits some syntax likely to be defined in future versions of ECMAScript.
*/

// Whole-script strict mode syntax
// 'use strict';
// var v = "Hi! I'm a strict mode script!";


//---------------------------------------Prototypes--------------------------------------

var Instructor = function(fName, lName, cT = []){
    this.firstName = fName;
    this.lastName = lName;
    this.classesTeaching = cT;
    this.employer = "Platform";
    this.info = function(){
      console.log(this.firstName,
        this.lastName,
        "is employed by",
        this.employer);
    }
}
var shah = new Instructor("A H M", "Shahparan", ["Full-Stack", "DE"]);
var kieda = new Instructor("Kieda", "Maliqi", ["Full-Stack"]);
var bairon = new Instructor("Bairon J.", "Vasquez");

console.log(shah);
console.log(kieda);
console.log(bairon);
console.log(bairon.info());

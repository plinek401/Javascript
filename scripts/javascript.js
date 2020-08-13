function myFunction() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
}

function removeImage(x) {
    let status = x.style.visibility;
    console.log(status);
    let i;
    console.log(status);
    if(status === 'hidden') {
        x.style.visibility = 'vibisle';
        x.style.width = "200px";
    }
    else {
        x.style.visibility = 'hidden';
        x.style.width = "0px";
    } 
}

function randomBackground() {
    let color = "#";
    options = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    
    for (let i = 0; i < 6; i++) {
        color = color + options[Math.floor(Math.random() * options.length)];
    }
    console.log(color);
    document.getElementsByClassName("container")[0].style.backgroundColor = color;
}


let angle = [0, 90, 180, 270];
let current = 0;

function spin(e) {
  current++;
  if (current == 4)
    current = 0;
  $(e).css('transform', 'rotate(' + angle[current] + 'deg)');
}


//------------------------------------------------------------------------------------------------------------------Notes---------------------------------------------------------



function prob6(){
    let prev = "";
    let max = 0;
    let count = 0;
    let string = "######******#*#*#*******####*****#######**#*****************";
    
    for (let i =0; i < string.length; i++){
        if(string[i] === "#"){
            prev = "#";
            count++;
        }
        else if(string[i] != "#" && prev === "#"){
            if(count > max) {
                max = count;
            }
            count = 0;
            prev = "*";
        }
        //Case if all characters are hashtags
        if(i === string.length - 1 ){
            if(count > max){
                max = count;  
            }
        }
    }
    console.log("Slide 6:");
    console.log(max);
}

function prob9(){
    let count = 0;
    string = "******************##*******#*****####****#######****#*"
    
    for(let i = 0; i < string.length; i++){
        if(string[i] === "#") {
            count++;
            continue;
        }
    }
    console.log("Slide 9:");
    console.log(count);
}

function arrAndDict() {
    let arr = [1,"A", 5.4];
    let dict = [{key1: "test"},{key2: "Dict"},{key3: "YAY!"},{key4: 1}];
    console.log(dict);
    
    for (var key in dict) {
        console.log(dict[key]);
    }
}

function cont(){
    let a = [23,12,52,53, ,54, ,21,63, ,32,31];
    for(let i = 0; i < a.length; i++){
        if(!a[i]){
            //This will skip all the undefined values in the array.
            continue;
        }
        console.log(a[i]);
    }
}

function validateNum(){
    while(true){
        const num = parseInt(window.prompt("Enter enter a number between 0 and 100: ")); 
        
        if(num < 100 && num > 0){
            console.log("Number squared is " + num*num);
            break;
        }
    }
}

function printInterval(){
    const l = parseInt(window.prompt("Please Enter L: "));
    const u = parseInt(window.prompt("Please Enter U: ")); 
    let string = "";
    
    if(l > u){
        console.log("L has to be lesser than U.");
    }
    
    else{
        for(let i = l; i < u; i++){
            string += i + " ";
        }
        console.log(string);
    }
}

function editArray(){
    let arr = [1,1,1,1,1,1,1,1,1,1];
    console.log(arr);
    while(true){
        const index = parseInt(window.prompt("Please Enter an index from 0 - 9: "));
        const value = parseInt(window.prompt("Please Enter a value: "));
        
        if(index < 10 && index >= 0){
            arr[index] = value;
            console.log(arr);
        }
        else{
            break;
        }
    }
    
}

function fibonacci(num){
    let arr = [0,1]
    for(let i = 2; i < num; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    console.log(arr);  
}

function objects(){
    let empty = {}; //Empty
    let point = {x:0, y:1};
    let point2 = {x:point.x, y:point.y+1};
    let book = {
        title: "Javascript IS EASY!",
        author: {
            firstname: "Pawel",
            lastname: "Linek"
        },
        PageCount: 500
    }
    
    for (let i in book){
        console.log(i);
        console.log(book[i]);
    }
}



function printprops(p){
    for (var o in p){
        console.log(o + ": "+ p[o] +"\n");
    }
}

person = {
    first_name: "Luke",
    last_name: "Lance",
    age: 23
};
/*Hoisting is the idea in javascript that all declarations in a script are moved to the top so that they are initialized before they are used.*/


//printprops(person);

var person;  //This is hoisting because the initialization comes after the declaration and usage.


//CALLBACK FUNCTION
console.log("Callback Functions.");
//Javascript allows you to create a function without an identifier. This is called a callback function.
//A callback function is very common in javascript. Callbacks are commonly passed as an argument to other functions.

var list = [34,4,5,12,64,21];

/*list.forEach(
function(item,index,arr){
    console.log(item, arr[index]);
});

list.forEach(
item => {
    console.log(item);
});*/

//Assigning a callback to a variable.
var sum_of_square = (a,b) => {
    return (a*a) + (b*b);
}

var result = sum_of_square(2,3);

//console.log(result);


var sumOfSquare = {
    first: 0,
    second: 0,
    square: function(){
        this.result = ((this.first*this.first)+(this.second*this.second));
        return this.result;
    }
}
sumOfSquare.first = 2;
sumOfSquare.second = 3;
var FR = sumOfSquare.square();
//console.log(FR);


function sum_of_square(a,b){
    function square(x){ x * x; }
    
    return (square(a) + square(b));
}

var result = sum_of_square(2,3);
//console.log(result);


var currentDate = new Date();
//console.log(currentDate);

//---------------------------------------------------------------------------------------

let rand = Math.random();
Math.floor(12.88); // = 12
let number = 8;
//var guess = prompt(`I can no write javascript in this line. This is from javascript: ${number}`);


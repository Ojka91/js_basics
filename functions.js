//functions


//creating a function
function firstFunction(){
    console.log("this is my first function");
}
//declaring a function
firstFunction();


//creating a function and displaying it with console.log
var x = 5;
var y = 13;
function sum(){
    return x+y;
}

console.log(sum());


//or defining all values of the function like this
function multiply (w, q){
    console.log(w*q);
}

multiply(8, 5);


//in case a value is created inside a function (like "t"), it wont be able to get used out of the function. In order to use it we can proceed like this

var r = 4;

function first(){
    var t = 56;
    console.log(r , t);
    second(t);
}

function second (t){
    console.log(t);
}
console.log(r);
first();
//display message webconsole
//declare variables
//if and else
//sorting array alphabetically
//looping over an array
//print the whole array
//print even numbers array
//print lowest number array
//print bigger number array
//array and index
//print repeating numbers on arrays
//array into String
//reverse numbers
//alphabeticaly order String
//convert to uppercase
//find longest word

//2. javascript basics

//print message on console
console.log("starting javascript...");


//exercice 1
var myName = "Oscar";
console.log(myName);

//exercice 2
var age = 27;
console.log(age);

//exercice 3
var ignasiAge=32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);

//exercice 4
if(age<21){
    console.log("You are younger than 21");
}else if(age>21){
    console.log("You are older than 21");
}else{
    console.log("You are 21");
}

//exercice 5
if(age<ignasiAge){
    console.log("Ignasi is older than you");
}else if(age>ignasiAge){
    console.log("Ignasi is younger than you");
}else{
    console.log("You have the same age as Ignasi");
}


//3. javascript array

    //sorting an array

var names = ["Ernest", "Santi", "Anna", "Anna2", "ELvira", "Oriol", "Ling", "Claudia", "Andi", "Josep", "Patrick", "Andrei", "Oscar", "Vasil", "Alex", "Lluis", "Raul"];
names.sort();

console.log(names[0]);
console.log(names[names.length-1]);

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}
    //2 looping over an array

var agesclass=[40, 18, 25, 29, 27, 23, 34, 19, 27, 34, 26, 27, 50];
        //print the whole array
    var a=0;
while (a<agesclass.length){
    console.log(agesclass[a]);
    a++;
}
        //print even numbers
   var r=0;
while (r<agesclass.length){
    if((agesclass[r])%2==0){
        console.log(agesclass[r]);
    }
    r++;
}

        //print even numbers
for (var q=0; q<agesclass.length; q++){
    if((agesclass[q])%2==0){
        console.log(agesclass[q]);
    }

}

    //3 lowest number array
    
function lowestArray(){
    var min = Math.min(...agesclass);
    console.log(min);
}
lowestArray();

    //4 biggest number array

function biggestArray(){
    var max = Math.max(...agesclass);
    console.log(max);
}
biggestArray();

    //5 array and index

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 8;

function arrayIndex(){
    console.log(array[index]);
}
arrayIndex();


    //6 print repeating numbers on array

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
array.sort();
function repeatingnum(){
    for (x=0; x<array.length; x++){
        if(array[x]==array[x+1]){
            console.log(array[x]);
        }
    }
}
repeatingnum();

    //7 array into string

function arrayToString(){
var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
}

arrayToString();

//String functions

    //1. reverse numbers

var p=32443;
function reverse(){
p = p+"";        //convert into string
console.log( p.split("").reverse().join(""));
}
    //split into array, reverse the array, join into one string
reverse();

    //2. alphabetical order string
var str = "webmaster";

function alphabet(){
    console.log( str.split("").sort().join(""));
}

alphabet();

    //3. convert to uppercase

var pr= "prince of persia";

function touppercase(){
pr = pr.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
console.log(pr);
    
}
touppercase();

    //4. find longest word

 var phrase = "Web Development Tutorial";
function longestWord() {
    var str = phrase.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    console.log(word);
}
longestWord();
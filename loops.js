//loops
//for
//forEach
//for in
//for of

var names = ["Oscar", "Sheldon", "Marie", "Joseph"];
names.number = 0; //we add an object

console.log(names);


for (var x = 0; x < names.length; x++) {
    console.log(names[x]);
};
//as you can see most of the loops doesn't show the item we added, and only shows the original array



//same happens here
//tip: forEach cant use continue or break
names.forEach(function (element, index, array) { //you can call this three attributes and see what happens in the code!
    console.log(element); //element
    console.log(index); //position
    console.log(array); //array

});

var numbers = [4, 8, 9, 12];

//example 
numbers.forEach(function (element, index, array) {
    array[index] = Math.pow(element, 2);
})
console.log(numbers);

names.forEach((element) => {
    console.log(element);
});

names.forEach(element => console.log(element));
//three ways you can write the same (check out arrow functions)



//this for is the only one that shows the object we added
for (const index in names) {
    console.log(names[index]);
}




for (name of names) {
    console.log(name);
}





//as you will see below, only for in can go through an object

var properties = {
    "Oscar": "Spain",
    "Sheldon": "EEUU",
    "Marie": "France",
    "Joseph": "Portugal",
}

var text ="";
for (let person in properties){
    text += properties[person];
    console.log(person);
}
console.log(text);




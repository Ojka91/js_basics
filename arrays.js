//arrays

//array contains multiple values as a list
var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];


//if you print the array, it will show the full array and the position number
console.log(fibonacci);


//position goes from 0 to "length-1" 
//will print the number in the position 6 (0, 1, 2, 3, 4, 5, 6)
console.log(fibonacci[6]); 

//it will add a new element into the array
fibonacci.push(55);
console.log(fibonacci);

//if you want to see the last item of an array (remember it starts with poition 0)
console.log(fibonacci[fibonacci.length-1]);

//you can create an array inside an array
var twodimensions = [5, [4, 5], 8, 3];
console.log(twodimensions);

//and select a specific one
console.log(twodimensions[1][0]); //it prints number 4

//to sort an array alphabeticaly
var names=[Oscar, Anna, James, Oliver];
names.sort();

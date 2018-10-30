//conditions


//if create a condition and what to do in different cases
var y=80;
if (y<10){
    console.log("its smaller");
    }else if(y==10){
        console.log("its equal to 10");
    }else{
        console.log("its bigger")
    }






//"for" can create loops

//and for example, make them work with arrays
//it will display the whole array
var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];

for(var i=0; i<fibonacci.length; i++){
    console.log(fibonacci[i]);
}



//"while" create a loop with a condition

var x = 15;

while(x<50){
    console.log(x);
    x++;
}
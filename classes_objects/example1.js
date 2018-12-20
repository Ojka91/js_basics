
console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.

class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand, some_model)
	constructor(brand, model) {
		this.brand = brand;
        this.model = model;
		this.speed = 0;
	}

	// methods:

	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount) {
		this.speed -= amount;
        
        //speed never can go below 0
        if (this.speed < 0){
            this.speed = 0;
        }
	}
    
    reset(){
        this.speed = 0;
    }
    
    running(){
        if (this.speed > 0){
            return true
        }
        else{
            return false
        }
    }

	status() {
		return this.brand + " " + this.model + " running at " + this.speed + " km/h";                 
	}
    
}


//another example...
class tv {
    constructor (brand){
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    
    changeVolume(volume){
        this.volume += volume;
        
        //again volume never go below 0
        if (this.volume < 0 ){
            this.volume = 0;
        }
        //and never above 100
        else if (this.volume > 100) {
            this.volume = 100;
        }
    }
    
    changeChannel(channel){
        if (channel < 61 && channel > 0){
            this.channel = channel;
        }
        else {
            this.channel = this.channel;
        }
    }
    
    reset(){
        this.channel = 1;
        this.volume = 50;
    }
    
    state(){
        return "volume "+this.volume + " channel " + this.channel
    }
}





//creation of objects from the classes we have above
var tv1 = new tv("Sony");
var car = new Car("Ford", "Mondeo");

//checking some status

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());


console.log(tv1.state());
tv1.changeChannel(28);
tv1.changeVolume(80);
console.log(tv1.state());

// We may create other cars easily

var car2 = new Car("Ferrari");
car2.accelerate(200);
console.log(car2.status());


var car3 = new Car("DumbCar");
car3.accelerate(50);
console.log(car3.status());
car3.brake(200);
console.log(car3.status());





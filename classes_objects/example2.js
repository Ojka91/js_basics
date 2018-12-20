console.log("Objects containing other objects");

// This is a more complex exercice with classes...


//we have a class Product that create products from our shop
class Product {

    constructor(name, price, num, stock) {
        this.name = name;
        this.price = price;
        this.num = num;
        this.stock = stock;
    }

    toString() {
        return this.name + " " + this.price + "€";
    }
}

// creation of a couple of products
let p1 = new Product("vacuum cleaner", 100, 0, 10);
let p1replaced = new Product("tv", 120, 0, 10);
let p2 = new Product("pencil", 3, 0, 10);
let p2replaced = new Product("superPen", 3, 0, 10);
let p3 = new Product("bike", 300, 0, 10);
let p3replaced = new Product("Snowboard", 280, 0, 10);
let p4 = new Product("charger", 20, 0, 10);
let p4replaced = new Product("battery", 25, 0, 10);


// Now, let's create a ShoppingCart class, that will contain products
class ShoppingCart {

    constructor() {
        this.products = []; //will add here all the products we want to buy
        this.total = 0; //total of price that will cost
        this.products_off = []; //products for free 
        this.items = []; //sample of each product we are buying

    }
    init() {
        //create array items with one example of each items
        for (var x = 0; x < this.products.length; x++) {

            if (!this.items.includes(this.products[x])) {
                this.items.push(this.products[x]);
            }
        }
    }

    //add products at our array products, ready to buy
    addProduct(product) {
        this.products.push(product);
        this.products.sort();
    }

    toString() {
        return "cart with: " + this.products;
    }
    
    //this function calculates the total price, the objects for free, and some discount
    totlPrice() {
        var count = 0;
        var price = 0;
        var off = 0;
        this.total = 0;
        var stockCount = 0;


        //count how many items of each we have, and rest it from stock
        for (var y = 0; y < this.items.length; y++) {
         
            count = 0;
            for (var z = 0; z < this.products.length; z++) {
                if (this.items[y].name === this.products[z].name) {
                    count++;  
                }
            }
            this.items[y].num = count;
            this.items[y].stock -= count;
        }
        
        
        //start calculating the price...
        for (var q = 0; q < this.products.length; q++) {
            this.total = this.total + this.products[q].price;
        }
        
        //every 4 same items, one for free, and 10% discount if do buy more than 4 items
        for (var t = 0; t < this.items.length; t++) {
            off = off + this.items[t].price * (Math.trunc(this.items[t].num / 4));
            if (Math.trunc(this.items[t].num / 4) >= 1) {
                this.products_off.push("you have " + Math.trunc(this.items[t].num / 4) + " " + this.items[t].name + " for free");
            }
        }
        this.total = this.total - off;
        if (this.products.length > 4) {
            this.total = this.total - (this.total / 10);
            return this.total + " euros with 10% discount" + this.products_off;
        } else {
            return this.total + " euros";
        }

    }
    
    //replace an item for a new one
    replace(productName, replacementProduct) {
        var replace = this.products;

        replace.forEach(function (product, i) {
            if (product.name == productName) {
                replace.splice(i, 1, replacementProduct);
            }
        })

    }

    //check the stock and add more if its empty
    checkStock() {
        for (var x = 0; x < this.items.length; x++) {
            if (this.items[x].stock <= 2) {
                this.addStock(this.items[x].name);
            }
        }
    }
     addStock(name) {
        for (var x = 0; x < this.items.length; x++) {
            if (name === this.items[x].name) {
                this.items[x].stock = this.items[x].stock + 10;
            }
        }
    }
}



// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p1);
cart.addProduct(p3);
cart.addProduct(p1);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p3);
cart.addProduct(p1);
cart.addProduct(p3);
cart.addProduct(p4);
cart.addProduct(p4);

//replace all the vacuum for nre item (in this case tv)
cart.replace("vacuum cleaner", p1replaced);



console.log("We have a " + cart);

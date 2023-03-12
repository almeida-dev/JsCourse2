//Objects
/*
var car = {
    wheels: 4,
    color: "red",
    drive: function(){
        console.log("wroom wroom")
    }
}
console.log(Object.keys(car)[0])
console.log(typeof Object.keys(car)[0])
car.drive();
*/





/*
var car = new Object()
var car = {}

car.color = 'red';
console.log(car)
*/





/*
var car = {
    wheels: 4,
    color: "red",
    "goes fast": true
 }
console.log(car.goes fast) // syntax error
console.log(car['goes fast'])
*/





/*
var cars = {
    ferrari: "california",
    porsche: "911",
    bugatti: "veyron",
}
// user input
var key = "ferrari"
console.log(cars.key);
// undefined
console.log(cars['key']);
// undefined
console.log(cars[key]);
// california
*/





//Copying Objects
/*
let car = {
    color: 'red'
}

let secondCar = car;
car.wheels = 4
console.log(car);
console.log(secondCar);
*/





/*
let car = {
    color: 'red'
}
let secondCar = car;
car.wheels = 4;
console.log(car == secondCar);
console.log(car === secondCar);

var emptyObj1 = {};
var emptyObj2 = {};
emptyObj1 == emptyObj2;
emptyObj1 === emptyObj2;
var obj1 = {a: 1};
var obj2 = {a: 1};
obj1 == obj2;
obj1 === obj2;
*/





/*
const car = {
    color:'red'
}
var secondCar = Object.assign({}, car)
car.wheels = 4;
console.log(car);
console.log(secondCar);
*/





//Arrays
/*
var fruitBasket = ['apple','banana','orange']
var fruitBasket = ['apple','banana','orange']
console.log(fruitBasket[0])
console.log(fruitBasket[1])
console.log(fruitBasket[2])
*/





//METHODS
/*
var fruitBasket = ['apple','banana','orange'];
console.log(fruitBasket.length);
fruitBasket.push('pear')
console.log(fruitBasket);
fruitBasket.unshift('melon') // add a new value at the beginning
console.log(fruitBasket);
fruitBasket.pop() // remove a value from the end of the array
console.log(fruitBasket);
fruitBasket.shift() // remove a value from the beginning
console.log(fruitBasket);
*/





//"typeof"
/*
var str = "hello"
typeof(str);
var num = 12;
typeof(num);
var arr = [1,2,3];
typeof(arr);
var obj = {prop: 'value'}
typeof(obj);
typeof(null);
*/





//FUNCTIONS
/*
function greet(name){
    console.log("hello " + name);
}
greet("Alberto");
*/





/*
let myInt = 1;
function increase(value){
    return value +=1;
}
console.log(myInt);
console.log(increase(myInt));
console.log(myInt);
*/





//Example with object
/*
let myCar = {
    make: "bmw",
    color: "red"
}
console.log(myCar);

function changeColor(car){
    car.color = "blue"
}
changeColor(myCar);
console.log(myCar);
*/





//Function Expression
/*
var greeter = function greet(name){
    console.log("hello " + name);
}
greeter("Alberto");
*/





//Anonymous function
/*
var greeter = function(name){
    console.log("hello " + name);
}
greeter("Alberto");
*/





//Arrow function
/*
var greeter = (name) => {
    console.log("hello " + name);
}
greeter("Alberto");
*/





//var scope
/*
var myInt = 1;
if(myInt === 1){
    var mySecondInt = 2
    console.log(mySecondInt);
}
console.log(mySecondInt);
*/





//
/*
var myInt = 1;
if(myInt === 1){
    let mySecondInt = 2
    console.log(mySecondInt);
}
console.log(mySecondInt);
// Uncaught ReferenceError: mySecondInt is not defined
//keywords let or const are bound to the block
*/





// this keyword
/*
var myCar = {
    color: 'red',
    logColor: function(){
        console.log(this.color)
    }
}
myCar.logColor();
//this keyword referred to the myCar Object
*/





/*
function logThis(){
    console.log(this);
}
logThis();
// Window {...}
*/





// If we want to manually set the value of this
//to something we can use .bind
/*
var myCar = {
    color: 'red',
    logColor: function(){
        console.log(this.color)
    }
}
var unboundGetColor = myCar.logColor;
console.log(unboundGetColor())
// undefined
var boundGetColor = unboundGetColor.bind(myCar)
console.log(boundGetColor())
// red
*/





//Look at this example using .call()
/*
function Car(make,color){
    this.carMake = make;
    this.carColor = color;
}

function MyCar(make,color){
    Car.call(this,make,color)
    this.age = 5
}

var myNewCar = new MyCar('bmw','red')
console.log(myNewCar.carMake)
// bmw
console.log(myNewCar.carColor)
// red
*/





//Example with .apply
/*
function Car(make,color){
    this.carMake = make;
    this.carColor = color;
}

function MyCar(make,color){
    Car.apply(this,[make,color])
    this.age = 5
}

var myNewCar = new MyCar('bmw','red')
console.log(myNewCar.carMake)
// bmw
console.log(myNewCar.carColor)
// red
*/





// .apply
/*
var ourFunction = function(item, method, args){
    method.apply(args)
}
ourFunction(item,method, ['argument1', 'argument2'])
ourFunction(item,method, ['argument1', 'argument2', 'argument3'])
*/

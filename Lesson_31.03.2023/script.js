//1
// class User{
//     static staticMethod(){
//         alert (this === User);
//     }
// }

// User.staticMethod();

//2
// class Article {
//     constructor(title, date){
//         this.title = title;
//         this.date = date;
//     }

//     static createTodays(){
//         return new this("Сьогоднішній дайджест", new Date());
//     }
// }

// let article = Artcile.createTodays();

// alert(article.title);

//3
// class CoffeeMachine{
//     _waterAmount = 0;
//     #waterLimit = 200;

//     set waterAmount(value){
//         if(value < 0) throw new Error("Niema wody!");
//         this._waterAmount = value;
//     }

//     get waterAmount(){
//         return this._waterAmount;
//     }
//     constructor(power){
//         this._power = power;
//         // alert(`Створена кофемашина, потужність ${power}`);
//     }

//     #checkWater(value) {
//         if (value < 0) throw new Error("Niema wody!");
//         if (value > this.#waterLimit) throw new Error ("Duzo wody!");
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = -200;
// // coffeeMachine.#checkWater(); //Error
// // coffeeMachine.#waterLimit = 1000; //Error

//6
// class PowerArray extends Array {
//     isEmpty(){
//         return this.length === 0;
//     }

//     static get [Symbol.species](){
//         return Array;
//     }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty());

// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr);
// alert(filteredArr.isEmpty());

//8
// class Rabbit {}
// let rabbit = new Rabbit();

// alert(rabbit instanceof Rabbit); //true

//9
// class Animal {
//     static [Symbol.hasInstance](obj){
//         if(obj.canEat) return true;
//     }
// }

// let obj = {canEat:true};
// alert(obj instanceof Animal);

//10
let objectToString = Object.prototype.toString();

let arr = [];

alert(objectToString.call(arr));
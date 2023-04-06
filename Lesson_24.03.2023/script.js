//1
// function slow(x){
//     alert(`Called with ${x}`);
//     return x;
// }

// function cachingDecorator(func){
//     let cache = new Map();

//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }

//         let result = func(x);

//         cache.set(x, result);
//         return result;
//     };
// }

// slow = cachingDecorator(slow);

// alert(slow(1));
// alert("Again " + slow(1));

// alert(slow(2));
// alert("Again " + slow(2));

//2
// function hash(){
//     alert([].join.call(arguments));
// }

// hash(1, 2);

//3
// let user = {
//     firstName: "Вася"
// };

// function func(){
//     alert(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser();

//4
// class User {

//     constructor(name){
//         this.name = name;
//     }

//     sayHi(){
//         alert(this.name);
//     }
// }

// let user = new User("Іван");
// user.sayHi();
// console.log(user);

//5
// class User {

//     constructor(name){
//         this.name = name;
//     }

//     get name () {
//         return this._name;
//     }

//     set name(value){
//         if (value.length < 4){
//             alert("Ім'я занадто коротке.");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("Іван");
// alert(user.name);

// user = new User("");

//6 & 7
// class Animal {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         alert(`${this.name} біжить зі швидкістю ${this.speed}.`);
//     }
//     stop(){
//         this.speed = 0;
//         alert(`${this.name} стоїть.`);
//     }
// }

// let animal = new Animal("Моя домашня тваринка");

// class Rabbit extends Animal{ //наслідує
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }
//     hide(){
//         alert(`${this.name} ховайся!`);
//     }
// }

// let rabbit = new Rabbit("Білий кролик");

// rabbit.run(5);
// rabbit.hide();

//8
// class Animal { 
 
//     constructor(name) { 
//       this.name = name; 
//     } 
   
//   } 
   
//   class Rabbit extends Animal { 
//     constructor(name) { 
//       super(name); 
//       this.created = Date.now(); 
//     } 
//   } 
   
//   let rabbit = new Rabbit("Білий кролик"); // Error: this is not defined 
//   alert(rabbit.name);

//9
class Clock { 
    constructor({ template }) { 
        this.template = template; 
    } 

    render() { 
        let date = new Date(); 
        let hours = date.getHours(); 
        if (hours < 10) hours = '0' + hours; 

        let mins = date.getMinutes(); 
        if (mins < 10) mins = '0' + mins; 

        let secs = date.getSeconds(); 
        if (secs < 10) secs = '0' + secs; 

        let output = this.template 
            .replace('h', hours) 
            .replace('m', mins) 
            .replace('s', secs); 

        console.log(output); 
    } 

    stop() { 
        clearInterval(this.timer); 
    } 
    
    start() { 
        this.render(); 
        this.timer = setInterval(() => this.render(), 1000); 
    } 
}

class ExtendedClock extends Clock{
    constructor(data){
        super(data);
        let {precision = 1000} = data;
        this.precision = precision;
    }
    start(){
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}
let clock = new ExtendedClock();
console.log(clock.start());
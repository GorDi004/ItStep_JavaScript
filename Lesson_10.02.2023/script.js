//1
// let calculator = { 
//     read() {
//         this.a = +prompt("Enter first number", ' ');
//         this.b = +prompt("Enter second number", ' ');
//     },
//     sum() {return this.a + this.b},
//     mul() {return this.a * this.b}
//   }; 
   
//   calculator.read(); 
//   alert( calculator.sum() ); 
//   alert( calculator.mul() );
//   console.log(calculator);

//2
// let ladder = { 
//     step: 0, 
//     up() { 
//         this.step++;
//         return this; 
//     }, 
//     down() { 
//         this.step--; 
//         return this;
//     }, 
//     showStep: function() { // показывает текущую ступеньку 
//         alert( this.step );
//         return this; 
//     } 
// };

// ladder.up().up().down().showStep().down().showStep();

//3
let car = {
    name: "Hyundai",
    model: "Santa FE",
    year: "2020",
    speed: 200,
    information (){
        document.write(`
        Name: ${this.name}<br>
        Model: ${this.model}<br>
        Year: ${this.year}<br>
        Speed: ${this.speed}<br>
        `)
    },
    findTime(s){
        let count = 0;
        let theTime =  (s / (this.speed / 2));
        // console.log(count);
        return theTime + count;
    }
}
car.information();
document.write(car.findTime(600));
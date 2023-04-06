//1
// function Calculator (){ 
//     this.read = function() {
//         this.a = +prompt("Enter first number", ' ');
//         this.b = +prompt("Enter second number", ' ');
//     };
//     this.sum = function() {return this.a + this.b};
//     this.mul = function() {return this.a * this.b};
//   }; 
//    let calculator = new Calculator();
//   calculator.read(); 
//   alert( calculator.sum() ); 
//   alert( calculator.mul() );

//2
function Accumulator(number){
    this.value= number;
    this.read = function(){
        this.value+= +prompt("Enter your number", ' ');
    }
}
let accumulator = new Accumulator(1); // начальное значение 1 
 
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению 
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению 
 
alert(accumulator.value); // выведет сумму этих значений
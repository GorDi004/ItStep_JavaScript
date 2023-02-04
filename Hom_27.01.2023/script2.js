//1
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.

// let firstNumber = parseInt(prompt("Enter first number", ' '));
// let lastNumber = parseInt(prompt("Enter last number", ' '));
// let summa = 0;
// if(firstNumber < lastNumber){
//     let temp = firstNumber;
//     firstNumber = lastNumber;
//     lastNumber = temp;
// }
// for (let i = firstNumber; i <= lastNumber; i++)
//     summa+=i;
// document.write("Summa = " + summa + ".");


//2
// Запросить 2 числа и найти только наибольший общий
// делитель.

// let first = parseInt(prompt("Enter first number", ' '));
// let second = parseInt(prompt("Enter second number", ' '));
// let biggest = 0;
// if(first < second){
//     let temp = first;
//     first = second;
//     second = temp;
// }
// for (let i = 1; i <= second; i++)
//     if( first % i == 0 && second % i == 0)
//         biggest = i;
// document.write("The biggest is " + biggest + ".");


//3
// Запросить у пользователя число и вывести все делители
// этого числа.

// let number = parseInt(prompt("Enter number", ' '));
// for (let i = 0; i <= number; i++)
//     if(number % i == 0)
//         document.write(i + "<br>");


//4
// Определить количество цифр в введенном числе.

// let number = prompt("Enter your number", ' ');
// document.write(number.length);


//6
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.

// let a, b, operation, next;

// do{
// a = parseInt(prompt("Enter first number", ' '));
// b = parseInt(prompt("Enter second number", ' '));
// operation = prompt("Enter operation number", ' ');
// switch(operation){
//     case '+': document.write(a + " + " + b + " = " + (a + b)); break;
//     case '-': document.write(a + " - " + b + " = " + (a - b)); break;
//     case '*': document.write(a + " * " + b + " = " + (a * b)); break;
//     case '/': document.write(a + " / " + b + " = " + (a / b)); break;
// }
// next = confirm("One more time?");
// }
// while(next == true);
//1
// Запросить у пользователя число и определить, оно поло-жительное, отрицательное или ноль.
// let number = prompt("Enter a number", ' ');
// if(parseInt(number) == 0) alert("Your number is zero.")
// if(parseInt(number) < 0) alert("Your number is negative.");
// if(parseInt(number) > 0) alert("Your number is positive.");

//2
// Запросить у пользователя его возраст и проверить кор-ректность введенных данных (0–120 лет). 
// let age = parseInt(prompt("Enter your age", ' '));
// if(age < 0 || age > 120) alert("Error!");

//3
// Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).
// let number = parseInt(prompt("Enter your number", ' '));
// if(number < 0) alert(`|${number}| = ${number * (-1)}`);
// if(number > 0) alert(`|${number}| = ${number}`);
// // alert(Math.abs(number));

//4
// Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.
// let seconds = parseInt(prompt("Enter seconds", ' '));
// let minutes = parseInt(prompt("Enter minutes", ' '));
// let hours = parseInt(prompt("Enter hours", ' '));
// if (seconds >= 59 || seconds <= 0) alert("Error! Seconds!"); 
// if (minutes >= 59 || minutes <= 0) alert("Error! Minutes!"); 
// if (hours >= 23 || hours <= 0) alert("Error! Hours!");

//5
// Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.
// let x = parseInt(prompt("Enter x", ' '));
// let y = parseInt(prompt("Enter y", ' '));
// if(x > 0 && y > 0) alert("Number of your quater coordinates is I.");
// if(x < 0 && y > 0) alert("Number of your quater coordinates is II.");
// if(x < 0 && y < 0) alert("Number of your quater coordinates is III.");
// if(x > 0 && y < 0) alert("Number of your quater coordinates is IV.");
// if(x == 0 && y == 0) alert("It is origin.");

//----------------------------------------------------------------------------------------------------------

//1
// Запросить у пользователя номер месяца и вывести на экран его название.
// let month = prompt("Enter number of month", ' ');
// switch(month){
//     case '1': alert("January"); break;
//     case '2': alert("February"); break;
//     case '3': alert("March"); break;
//     case '4': alert("April"); break;
//     case '5': alert("May"); break;
//     case '6': alert("June"); break;
//     case '7': alert("July"); break;
//     case '8': alert("August"); break;
//     case '9': alert("September"); break;
//     case '10': alert("October"); break;
//     case '11': alert("November"); break;
//     case '12': alert("December"); break;
//     default: alert("Error"); break;
// }

//2
// Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.
// let a = parseInt(prompt("Enter first number", ' '));
// let b = parseInt(prompt("Enter second number", ' '));
// let operation = prompt("Enter operation", ' ');
// switch(operation){
//     case '+': alert(`${a} ${operation} ${b} = ${a + b}`); break;
//     case '-': alert(`${a} ${operation} ${b} = ${a - b}`); break;
//     case '*': alert(`${a} ${operation} ${b} = ${a * b}`); break;
//     case '/': alert(`${a} ${operation} ${b} = ${a / b}`); break;
//     default: alert("Error!"); break;
// }

//----------------------------------------------------------------------------------------------------------

//1
// Запросить 2 числа и вывести большее из них.
// let a = parseInt(prompt("Enter first number", ' '));
// let b = parseInt(prompt("Enter second number", ' '));
// (a > b) ? alert(a) : alert(b);

//2
// Запросить 1 число и проверить, оно кратно 5 или нет
// let num = parseInt(prompt("Enter number", ' '));
// (num % 5 == 0) ? alert("Yes") : alert("No");

//3
// Запросить у пользователя название планеты. Если поль-зователь ввел «Земля» или «земля», то вывести «Привет, землянин!», в остальных случаях вывести «Привет, ино-планетянин!». 
// let planet = prompt("Enter your planet", ' ');
// (planet == "Earth" || planet == "earth") ? alert("Hello, earthling!") : alert("Hello, alien!");

//----------------------------------------------------------------------------------------------------------

//1
// Вывести # столько раз, сколько указал пользователь.
// let number = parseInt(prompt("Enter count", ' '));
// while(number > 0){
//     document.write("#\t");
//     number--;
// }

//2
// Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
// let number = parseInt(prompt("Enter number", ' '));
// while(number > 0){
//     document.write(number + "\t");
//     number--;
// }

//3
// Запросить число и степень. Возвести число в указанную степень и вывести результат.
// let number = parseInt(prompt("Enter number", ' '));
// let num = number;
// let power = parseInt(prompt("Enter power", ' '));
// while(power > 1){
//     number = num * number;
//     power--;
// }
// document.write(number);



                                              //4
// Запросить 2 числа и найти все общие делители.
// let a = parseInt(prompt("Enter first number", ' '));
// let b = parseInt(prompt("Enter second number", ' '));
// let biggest = 0, smallest = 0;
// (a > b) ? biggest = a : biggest = b;
// (a < b) ? smallest = a : smallest = b;
// while(biggest > smallest){
//     (biggest % smallest == 0) ? document.write(biggest / smallest) : document.write("");
//     document.write("\t");
//     biggest--;
// }




//5
// Посчитать факториал введенного пользователем числа.
// let number = parseInt(prompt("Enter number", ' '));
// let n = 1;
// while(number > 0){
//     n*=number;
//     number--;
// }
// document.write(n);
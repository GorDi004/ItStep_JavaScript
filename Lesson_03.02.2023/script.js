//1
// Написать функцию, которая принимает 2 числа и возвра-щает меньшее из них.
function smallerNumber (a, b){
    a > b ? document.write(b) : document.write(a); 
}

// smallerNumber(1, 15);


//2
// Написать функцию, которая возводит переданное число в указанную степень.
function myPow(a, x){
    let aa = a;
    for(let i = 1; i < x; i++){
        a *=aa;
    }
    document.write(a);
}
// myPow(2, 3);

//3
// Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
function calculator(a, b, operation){
    switch(operation){
        case '+': document.write(a + b); break;
        case '-': document.write(a - b); break;
        case '*': document.write(a * b); break;
        case '/': document.write(a / b); break;
        default: "Error"; break;
    }
}
// calculator(12, 6, '+'); 

//4
// Написать функцию, которая проверяет, является ли переданное ей число простым.
function primeNumber(a){
    let n = a;
    let count = 0;
    while(n > 0){
        if(a % n == 0){
            count++;
        }
        n--;
    }
    count >= 3 ? document.write("Number is compound.") : document.write("Number is prime.");
}
// primeeNumber(57);

//5
// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.
function multiplicateNumber(a){
    for (let i = 2; i < 10; i++){
        document.write(a + " * " + i + " = " + (a * i) + "<br>");
    }
}
// multiplicateNumber(3);

//6
// Написать функцию, которая реализует работу оператора %. 
// Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. 
// В функции использовать только + - * /, оператор % не использовать. 
function percent(a, b){
    let remainder = 0;
    for (let i = b; i < a;i++){}
    let fraction = Math.round(a / b);
    remainder = a - fraction;
    document.write(remainder);
}
// percent(26, 3);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//7
// Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму
function summa( ){
    let summa = 0;
    for (let i = 0; i < arguments.length; i++)
        summa += arguments[i];
    document.write(summa);
}
// summa(1, 2, 1);

//8
// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
function biggestNumber(){
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] > max)
            max = arguments[i];
    }
    document.write(max);
}
// biggestNumber(7, 4, 3, 15, 8);

//9
// Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. 
// Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
function evenOddNumbers(min, max, choice){
    if(min > max){
        let temp = min;
        min = max;
        max = temp;
    }
    for (let i = min; i <= max; i++){
        if(choice === true)
            if(i % 2 == 0)
                document.write(i + "<br>")
        if(choice === false)
            if(i % 2 == 1)
                document.write(i + "<br>")
    }
}
// evenOddNumbers(1, 5, false);
// evenOddNumbers(5, 1, false);

//10
// Написать функцию, которая принимает дату (день, месяц, год) и 
// возвращает дату следующего дня в виде строки «дд.мм.гггг». 
// Проверку на високосный год желательно написать отдельной функцией.
function theNextDay(day, month, year){
    if(day < 28|| day > 0){
        if(month > 0 || month < 13){
            if(day > 9 && month > 9){ 
                document.write((day + 1), "." + month + "." + year);
            }
            if(day < 10 && month < 10){ 
                document.write("0" + (day + 1) + ".0" + month + "." + year);
            }
            if(day < 10 && month > 9){ 
                document.write("0" + (day + 1) + "." + month + "." + year);
            }
            if(day > 9 && month < 10){ 
                document.write((day + 1) + ".0" + month + "." + year);
            }
        }
    }
}
theNextDay(3, 2, 2023);
theNextDay(14, 2, 2023);
theNextDay(3, 12, 2023);
theNextDay(25, 26, 2023);
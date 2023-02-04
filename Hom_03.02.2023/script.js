//1
// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.
function compareTwoNumbers (a, b){
    if (a > b) return 1;
    if(a < b) return -1;
    return 0;
}
// console.log(compareTwoNumbers(1, 2));
// console.log(compareTwoNumbers(2, 1));
// console.log(compareTwoNumbers(2, 2));


//2
// Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(a){
    let factorial = 1;
    for (let i = a; i > 1; i--)
        factorial*=i;
        return factorial;
}
// console.log(factorial(4));

//3
// Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.
function glueTogether(a, b, c){
    a = a.toString();
    b = b.toString();
    c = c.toString();
    return a + b + c;
}
// console.log(glueTogether(1, 2, 3));

//4
// Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.
function squareSearcher (){
    if (arguments.length < 2)
        return arguments[0] * arguments[0];
    if (arguments.length = 2)
        return arguments[0] * arguments[1];
}
// console.log(squareSearcher(2));
// console.log(squareSearcher(1, 2));

//5
// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.
function perfectNumber(a){
    let perfect = 0;
    if (a === 6) return true;
    if (a > 6){
        for (let i = 2; i < a; i+=2){
            perfect = Math.pow(2, i) * (Math.pow(2, i + 1) - 1);
            if(perfect === a) return true;
        }
    }
    return false;
}
// console.log(perfectNumber(6));
// console.log(perfectNumber(15));
// console.log(perfectNumber(8128));

//6
// Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.
function perfectNumbersInRange(min, max){
    if(min > max){
        let temp = min;
        min = max;
        max = temp;
    }
    for (let i = min; i <= max; i++)
        if(perfectNumber(i) === true)
            document.write(i + "<br>");
}
// perfectNumbersInRange(1, 500);

//8
// Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.
function onlySeconds(sec, min, h){
    if (sec > 60 || min > 60 || h > 24) document.write("Error");
    let summa = h * 360 + min * 60 + sec;
    if(summa > 1) document.write("There are " + summa + " seconds.<br>");
    else document.write("There is " + summa + " second.<br>");
}
// onlySeconds(1, 2, 1);
// onlySeconds(1, 0, 0);

//9
// Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».
function fromSeconds(sec){
    let h = Math.floor(sec / 3600);
    let min = Math.floor((sec - (h*3600)) / 60);
    let seconds =  Math.floor((sec - (h*3600) - min* 60));
    document.write(`${h}:${min}:${seconds}`);
}
// fromSeconds(5000);
// fromSeconds(5600);
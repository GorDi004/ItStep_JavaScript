//1
// Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).

// let age = parseInt(prompt("Enter your age", ' '));
// (age > 0 && age < 3) ? document.write("Child") 
// : (age > 11 && age < 19) ? document.write("Teenager") 
// : (age > 18 && age < 60) ? document.write("Adult") 
// : (age > 59) ? document.write("Pensioner") 
// : document.write("Error");


//2
// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

// let number = parseInt(prompt("Enter number 0-9", ' '));
// switch(number){
//     case 0: document.write(")"); break;
//     case 1: document.write("!"); break;
//     case 2: document.write("@"); break;
//     case 3: document.write("#"); break;
//     case 4: document.write("$"); break;
//     case 5: document.write("%"); break;
//     case 6: document.write("^"); break;
//     case 7: document.write("&"); break;
//     case 8: document.write("*"); break;
//     case 9: document.write("("); break;
//     default: document.write("Error!");break;
// }


//3
// Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.

// let number = parseInt(prompt("Enter three-digit number", ' '));
// let thirdNumber = number % 10;
// let secondNumber = (number % 100 - thirdNumber) / 10;
// let firstNumber = (number % 1000 - secondNumber*10 - thirdNumber) /100;
// // document.write(thirdNumber + "<br>");
// // document.write(secondNumber + "<br>");
// // document.write(firstNumber + "<br>");
// if(firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber){
//     document.write("This number has got similar digits.");
// }
// else{
//     document.write("This number hasn't got similar digits.");
// }


//4
// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.

// let year = parseInt(prompt("Enter year", ' '));
// if((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0))
//     document.write("This year is leap.");
// else
//     document.write("This year is simple.");


//5
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let number = parseInt(prompt("Enter your five-digit number", ' '));
// let thirdNumber = number % 10;
// let fourthNumber = (number % 100 - thirdNumber) / 10;
// let fifthNumber = (number % 1000 - fourthNumber*10 - thirdNumber) /100;
// let firstThreeNumbers = Math.round(number % 100000 / 100);
// let third= thirdNumber.toString(); 
// let fourth = fourthNumber.toString(); 
// let fifth = fifthNumber.toString();
// let lastThreeNumbers = third + fourth + fifth ;
// // document.write(firstThreeNumbers + "<br>");
// // document.write(lastThreeNumbers + "<br>");
// if(number < 10000 || number > 100000){
//     document.write("Error!");
// }
// if(number >= 10000 && number < 100000){
//     if(firstThreeNumbers == lastThreeNumbers){
//         document.write("This number is palindrom.");
//     }
//     if(firstThreeNumbers != lastThreeNumbers){
//         document.write("Try again!");
//     }
// }


//6
// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
// UAH или AZN, и получает в ответ соответствующую сумму.

// let usd = parseFloat(prompt("Enter your amount of money in USD", ' '));
// let currency = prompt("Enter the currency EUR/UAH/AZN", ' ');
// switch(currency){
//     case 'EUR': document.write(`USD -> EUR <br>$${usd} = €${(usd * 0.92).toFixed(2)}`); break;
//     case 'eur': document.write(`USD -> EUR <br>$${usd} = €${(usd * 0.92).toFixed(2)}`); break;
//     case 'UAH': document.write(`USD -> UAH <br>$${usd} = ₴${(usd * 37.28).toFixed(2)}`); break;
//     case 'uah': document.write(`USD -> UAH <br>$${usd} = ₴${(usd * 37.28).toFixed(2)}`); break;
//     case 'AZN': document.write(`USD -> AZN <br>$${usd} = ₼${(usd * 1.7).toFixed(2)}`); break;
//     case 'azn': document.write(`USD -> AZN <br>$${usd} = ₼${(usd * 1.7).toFixed(2)}`); break;
//     default:document.write("Error"); break;
// }

//7
// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%. 

// let amount = parseFloat(prompt("Enter your amount of money", ' '));
// if(amount >= 200 && amount < 300){
//     document.write("Congratulations! Your discount is 3%!<br>");
//     document.write(`Pay only: $${amount - amount*0.03}`);
// }
// if(amount >= 300 && amount < 500){
//     document.write("Congratulations! Your discount is 5%!<br>");
//     document.write(`Pay only: $${amount - amount*0.05}`);
// }
// if(amount >= 500){
//     document.write("Congratulations! Your discount is 7%!<br>");
//     document.write(`Pay only: $${amount - amount*0.07}`);
// }


//8
// Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 

// let circleLength = parseFloat(prompt("Enter length of circle", ' '));
// let squarePerimeter = parseFloat(prompt("Enter perimeter of square", ' '));
// let circleRadius = (circleLength / (2 * Math.PI.toFixed(2)));
// let squareRadius = squarePerimeter / 8;
// // document.write(circleRadius + "<br>");
// // document.write(squareRadius + "<br>");
// if(squareRadius === circleRadius){
//     document.write("Everything is possible!");
// }
// else{
//     document.write("Our life isn't perfect every time...");
// }


//9
// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.

// let firstQuestion = prompt("2 ^ 3 = ? \nA)2; \nB)4; \nC)8.", ' '); //C
// let secondQuestion = prompt("3 ^ 3 = ? \nA)3; \nB)27; \nC)23.", ' '); //B
// let thirdQuestion = prompt("256 ^ 0 = ? \nA)0; \nB)1; \nC)256.", ' '); //B
// let score = 0;
// if (firstQuestion === "C" || firstQuestion === "c") score+=2;
// if (secondQuestion === "B" || secondQuestion === "b") score+=2;
// if (thirdQuestion === "B" || thirdQuestion === "b") score+=2;
// document.write("Your score is " + score + ".");


//10
// Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год. 

// let day = parseInt(prompt("Enter day", ' '));
// let month = parseInt(prompt("Enter month", ' '));
// let year = parseInt(prompt("Enter year", ' '));
// let correctEntering = false;
// switch (month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         if(day <=31)
//         correctEntering = true; break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         if(day <=30)
//         correctEntering = true; break;
//     case 2:
//         if ((day <= 29 && year % 4 == 0) || (day <= 28 && year % 4 != 0))
//         correctEntering = true; break;
//     default:break;
// }
// if(correctEntering === false)
//     document.write("Error");
// if (day == 31 && month == 12){
//     day = 1;
//     month = 1;
//     year++;
// }
// else if ((day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12))
// || (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11))
// || (month == 2 && (day == 28 || day == 29))){
//     month++;
//     day = 1;
// }
// else{
//     day++;
// }
// if(day <= 9){
//     day = 0 + day.toString();
// }
// if(month <= 9){
//     month = 0 + month.toString();
// }
// document.write(`${day}.${month}.${year}`);
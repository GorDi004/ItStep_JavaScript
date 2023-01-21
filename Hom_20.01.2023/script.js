//1
// let name = prompt("Введіть Ваше ім'я", ' ');
// alert(`Привіт, ${name}!`);

//2
// const thisYear = 2023;
// let year = prompt("Введіть Ваш рік народження", ' '); 
// alert(`Ваш вік - ${thisYear - year}.`);

//3
// let a = prompt("Введіть довжину сторони квадрату", ' ');
// alert(`Периметр квадрату зі стороною - ${a} дорівнює ${4 * a}.`);

//4
// let R = prompt("Введіть довжину радіуса кола.", ' ');
// alert(`Площа кола з радіусом - ${R} дорівнює = ${(Math.round(Math.PI * R**2 * 100)/100)}`);

//5
// let s = prompt("Введіть відстань в кілометрах між двома містечками", ' ');
// let t = prompt("Введіть час за який Ви хотіли б дістатись до іншого містечка", ' ');
// alert(`Швидкість з якою Вам необхідно рухатись, щоб дістатись до іншого міста за вказаним часом = ${s / t}.`);

//6
// const euro = 0.92;
// let dollar = prompt("Введіть суму доларів, яку Вам потрібно отримати в євро", ' ');
// alert(`Сума $${dollar} = \u20ac${(Math.round(dollar * euro * 100)/100)}.`);

//7
// const fileSize = 820;
// let flashSize = prompt("Введіть розмір Вашого флеш-накопичувача в Гігабайтах", ' ');
// alert(`На Ваш флеш-накопичувач вміститься рівно ${Math.round(flashSize * 1024 / fileSize)} файлів розміром ${fileSize} Мегабайтів.`);

//8
// let summa = prompt("Введіть суму, яку Ви плануєте витратити", ' ');
// let chocolatePrice = prompt("Введіть ціну однієї шоколадки", ' ');
// alert(`Ви можете купити ${Math.floor(summa / chocolatePrice)} шоколадок і Ваша решта ${summa - (Math.floor(summa / chocolatePrice))*chocolatePrice} гривень.`)

//9
// let number = prompt("Введіть трьохзначне число", ' ');
// alert(`Ваше число ${number % 10}${Math.round(number / 10) % 10}${Math.round(number / 100) % 10}.`);

//10
// let integerNumber = prompt("Введіт ціле число", ' ');
// alert(`${integerNumber % 2 === 0 ? "Ваше число парне" : "Ваше число непарне"}.`);
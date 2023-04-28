//1
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// Например:
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.

//~~~~~~~~~~~~~~~~~~~~~~~~ВІДПОВІДЬ~~~~~~~~~~~~~~~~~~~~~~~~

function unique (arr) {
  return Array.from(new Set(arr))
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
]
let uniqueValues = unique(values)
console.log(uniqueValues) // ["Hare", "Krishna", ":-O"]

//2
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Например:
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

//~~~~~~~~~~~~~~~~~~~~~~~~ВІДПОВІДЬ~~~~~~~~~~~~~~~~~~~~~~~~

function aclean (arr) {
  let cleanObj = {}
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('')
    if (!(sorted in cleanObj)) cleanObj[sorted] = word
  }
  return Object.values(cleanObj)
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']
let cleanArr = aclean(arr)
console.log(cleanArr)

//3
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

//~~~~~~~~~~~~~~~~~~~~~~~~ВІДПОВІДЬ~~~~~~~~~~~~~~~~~~~~~~~~

// Метод Map.keys() повертає об'єкт ітератора (iterator object), який має методу push(). Щоб отримати масив із ключів, можна використовувати оператор spread.

let map = new Map()
map.set('name', 'John')

let keys = [...map.keys()]
keys.push('more')
console.log(keys) // ["name", "more"]

//4
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
// Например:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// alert( sumSalaries(salaries) ); // 650

//~~~~~~~~~~~~~~~~~~~~~~~~ВІДПОВІДЬ~~~~~~~~~~~~~~~~~~~~~~~~

function sumSalaries (salaries) {
    let sum = 0
    for (let salary of Object.values(salaries)) sum += salary
        return sum
}

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
}

console.log(sumSalaries(salaries)) // 650


//5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// let user = {
//   name: 'John',
//   age: 30
// };
// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

//~~~~~~~~~~~~~~~~~~~~~~~~ВІДПОВІДЬ~~~~~~~~~~~~~~~~~~~~~~~~

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};

  console.log(count(user)); // 2
//1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое количество и куплен или нет.
//Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

let purchaseList = [
    {name:"apple", count:"3", bought:false},
    {name:"pear", count:"4", bought:true},
    {name:"coconut", count:"23", bought:false},
    {name:"banana", count:"5", bought:true},
    {name:"kiwi", count:"3", bought:false},
    {name:"pineapple", count:"8", bought:true}
]

function print(list){
    let sortedList = list.slice().sort((a,b) => a.bought - b.bought)
    for (let purchase of sortedList){
        let status = purchase.bought ? "[sold]" : "[ ]"
        document.write(`${status} ${purchase.name}: ${purchase.count} <br>`)
    }
}

function addPurchase(list, name, count){
    let foundPurchase = list.find(purchase => purchase.name === name)
    foundPurchase ? foundPurchase.count += count : list.push({name, count, bought:false})
}

function buyPurchase(list, name){
    let foundPurchase = list.find(purchase => purchase.name === name)
    foundPurchase ? foundPurchase.bought = true : ""
}

document.write("<b>List:</b><br>");
print(purchaseList);

document.write("<b>Add purchases:</b><br>");
addPurchase(purchaseList, "strawberry", 1);
addPurchase(purchaseList, "juice", 2);
print(purchaseList);

document.write("<b>Buy purchase:</b><br>");
buyPurchase(purchaseList, "apple");
buyPurchase(purchaseList, "juice");
print(purchaseList);


//3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let styles = [
    { name: 'color', value: 'white' },
    { name: 'font-size', value: '5vw' },
    { name: 'font-style', value: 'italic' },
    { name: 'font-weight', value: 'bolder' },
    { name: 'text-align', value: 'center' },
    { name: 'text-shadow', value: '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000' },
    { name: 'display', value: 'flex' },
    { name: 'justify-content', value: 'center' },
    { name: 'margin', value: 'auto' },
    { name: 'background-color', value: 'red' },
    { name: 'width', value: '30vw' },
    { name: 'padding', value: '2vw' },
];

function applyStyles(styles, text) {
    let styleAttr = '';

    for (let i = 0; i < styles.length; i++) {
        styleAttr += `${styles[i].name}: ${styles[i].value}; `;
    }
    document.write(`<p style="${styleAttr}">${text}</p>`);
}

applyStyles(styles, 'GorDi');
applyStyles(styles, 'Gorbachevska Diana');

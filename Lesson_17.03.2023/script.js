
//1
// function ask(question, ...handlers) {
//     let isYes = confirm(question);

//     for (let handler of handlers){
//         if(handler.length == 0){
//             if(isYes) handler();
//         } else {
//             handler(isYes);
//         }
//     }
// }

// ask("Питання", ()=> alert('Ви відповіли так'), result => alert(result));

//2
// function sayHi(){
//     alert("Hi");

//     sayHi.counter++;
// }
// sayHi.counter = 0;

// sayHi();
// sayHi();

// alert(`Викликана ${sayHi.counter} разів`);

//3
function makeCounter(){
    counter.count = 0;
    function counter(){
        return counter.count++;
    }
    counter.decrease = function(){
        counter.count--;
    };
    counter.set = function(value){
        counter.count = value;
    };
    return counter;
}

let counter = makeCounter();

alert(counter());
counter.set(5);
alert(counter());
counter.decrease();
alert(counter());

//4
// let sayHi = function func(who) {
//     if (who) {
//         alert(`Hello, ${who}`);
//     } else {
//         func("Guest");
//     }
// };

// sayHi();
// func(); // недоступна
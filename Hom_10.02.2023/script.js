//1
// let Car = {
//     name:"Toyota",
//     model:"Land Cruiser",
//     year:2021,
//     speed:175,
//     print(){
//         document.write(`Name: ${this.name}<br>
//         Model: ${this.model}<br>
//         Year: ${this.year}<br>
//         Speed: ${this.speed}<br>`);
//     },
//     calculate(distance){
//         let hours = distance / this.speed;
//         let relaxTime = Math.floor(hours / 4);
//         const time = hours + relaxTime;
//         document.write(`Time: ${Math.round(time)}`);
//     }
// }
// Car.print();
// Car.calculate(1000)

//2
// const createFraction = (numerator, denominator) =>{
//     return{numerator, denominator};
// }

// const simpleFraction = (fraction) => {
//     const greatestCommonDenominator = (a, b) => b === 0 ? a : greatestCommonDenominator(b, a % b);
//     let commonDivisor = greatestCommonDenominator(fraction.numerator, fraction.denominator);
//     fraction.numerator /= commonDivisor;
//     fraction.denominator /= commonDivisor;
//     return fraction;
// }

// const addFractions = (fractionA, fractionB) => {
//     let numeratorX = fractionA.numerator * fractionB.denominator + fractionB.numerator * fractionA.denominator;
//     let denominatorX = fractionA.denominator * fractionB.denominator;
//     return simpleFraction(createFraction(numeratorX, denominatorX));
// }

// const subtractFractions = (fractionA, fractionB) => {
//     let numeratorX = fractionA.numerator * fractionB.denominator - fractionB.numerator * fractionA.denominator;
//     let denominatorX = fractionA.denominator * fractionB.denominator;
//     return simpleFraction(createFraction(numeratorX, denominatorX));
// }

// const multiplyFractions = (fractionA, fractionB) => {
//     let numeratorX = fractionA.numerator * fractionB.numerator;
//     let denominatorX = fractionA.denominator * fractionB.denominator;
//     return simpleFraction(createFraction(numeratorX, denominatorX));
// }

// const divideFractions = (fractionA, fractionB) => {
//     let numeratorX = fractionA.numerator * fractionB.denominator;
//     let denominatorX = fractionA.denominator * fractionB.numerator;
//     return simpleFraction(createFraction(numeratorX, denominatorX));
// }

// let fractionA = createFraction(3, 4);
// let fractionB = createFraction(1, 2);
// document.write(`<b>FractionA:</b> <i><u>${fractionA.numerator} / ${fractionA.denominator}</u></i><br>`);
// document.write(`<b>FractionB:</b> <i><u>${fractionB.numerator} / ${fractionB.denominator}</u></i>`);
// document.write("<hr>");
// let add = addFractions(fractionA, fractionB);
// document.write(`<b>Add:</b> <i><u>${add.numerator} / ${add.denominator}</u></i><br>`);

// let subtract = subtractFractions(fractionA, fractionB);
// document.write(`<b>Subtract:</b> <i><u>${subtract.numerator} / ${subtract.denominator}</u></i><br>`);

// let multiply = multiplyFractions(fractionA, fractionB);
// document.write(`<b>Multiply:</b> <i><u>${multiply.numerator} / ${multiply.denominator}</u></i><br>`);

// let divide = divideFractions(fractionA, fractionB);
// document.write(`<b>Divide:</b> <i><u>${divide.numerator} / ${divide.denominator}</u></i><br>`);


//3
let time = {
    hours:0,
    minutes:0,
    seconds:0,

    print: function () {
        document.write(`<b>${this.hours}:${this.minutes}:${this.seconds}</b><br><hr>`);
    },

    addSeconds: function (seconds) {
        let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
        this.hours = Math.floor(totalSeconds / 3600) % 24;
        this.minutes = Math.floor(totalSeconds / 60) % 60;
        this.seconds = totalSeconds % 60;
    },
    addMinutes: function(minutes){
        this.addSeconds(minutes * 60);
    },
    addHours:function  (hours) {
        this.addSeconds(hours * 3600);
    }
};

time.hours = 15;
time.minutes = 40;
time.seconds = 45;
time.print();
time.addSeconds(10);
time.print();
time.addMinutes(51);
time.print();
time.addHours(12);
time.print();
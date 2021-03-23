let number1 = Math.floor(Math.random() * 899) + 100;
let number2 = Math.floor(Math.random() * 899) + 100;
let number3 = Math.floor(Math.random() * 899) + 100;
let number4 = Math.floor(Math.random() * 899) + 100;
let number5 = Math.floor(Math.random() * 899) + 100;

console.log("numbers are:- " + number1, number2, number3, number4, number5)
    // greater no
if (number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5) {
    console.log(number1 + "is a greater number");
} else if (number2 > number1 && number2 > number3 && number2 > number4 && number2 > number5) {
    console.log(number2 + "is a greater number");
} else if (number3 > number1 && number3 > number2 && number3 > number4 && number3 > number5) {
    console.log(number3 + "is a greater number");
} else if (number4 > number1 && number4 > number2 && number4 > number3 && number4 > number5) {
    console.log(number4 + "is a greater number");
} else {
    console.log(number5 + "is a greater number");
}
//    small no
if (number1 < number2 && number1 < number3 && number1 < number4 && number1 < number5) {
    console.log(number1 + "is a smaller number");
} else if (number2 < number1 && number2 < number3 && number2 < number4 && number2 < number5) {
    console.log(number2 + "is a smaller number");
} else if (number3 < number1 && number3 < number2 && number3 < number4 && number3 < number5) {
    console.log(number3 + "is a smaller number");
} else if (number4 < number1 && number4 < number2 && number4 < number3 && number4 < number5) {
    console.log(number4 + "is a samller number");
} else {
    console.log(number5 + "is a smaller number");
}
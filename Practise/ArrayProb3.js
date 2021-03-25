let arr = [];

for (let i = 10; i <= 100; i++) {
    let number = i;
    let reverse = 0;
    while (number != 0) {
        let digit = number % 10
        reverse = reverse * 10 + digit
        number = number / 10

    }
    if (number == reverse) {
        arr.push(reverse)
    }


}
console.log(arr)
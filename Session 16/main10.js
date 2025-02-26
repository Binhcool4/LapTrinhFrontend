let number1 = +prompt("Nhập số đầu tiên: ");
let number2 = +prompt("Nhập số thứ hai: ");
let max;
let min;
if (number1 > number2) {
    max = number1;
    min = number2;
} else {
    max = number2;
    min = number1;
}

document.write (Math.round(Math.random() * (max - min)) + min);
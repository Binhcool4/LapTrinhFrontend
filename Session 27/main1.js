function plusNumber(num1, num2) {
    return num1 + num2;
}

function minusNumber(num1, num2) {
    return num1 - num2;
}

function multiplyNumber(num1, num2) {
    return num1 * num2;
}

function divisionNumber(num1, num2) {
    return num1 / num2;
}

let number1 = +prompt("Mời bạn nhập số đầu tiên:");
let number2 = +prompt("Mời bạn nhập số thứ hai");
let choice;
do {
    console.log("");
    console.log("1.Cộng hai số.");
    console.log("2.Trừ hai số.");
    console.log("3.Nhân hai số.");
    console.log("4.Chia hai số.");
    console.log("5.Thoát.");
    choice = +prompt("Mời bạn nhập lựa chọn: ");
    switch (choice) {
        case 1:
            console.log(plusNumber(number1, number2));
            break;
        case 2:
            console.log(minusNumber(number1, number2));
            break;
        case 3:
            console.log(multiplyNumber(number1, number2));
            break;
        case 4:
            console.log(divisionNumber(number1, number2));
            break;
        case 5:
            console.log("Thoát màn hình");
            break;                
        default:
            break;
    }
} while (choice != 5);

  
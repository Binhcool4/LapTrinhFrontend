let number1 = +prompt("Mời bạn nhập vào số a: ");
let number2 = +prompt("Mời bạn nhập vào số b: ");
let result;
let choose = prompt("Mời bạn nhập các phép tính (+, -, *, /): ");
switch (choose){
    case "+":
        result = number1 + number2;
        alert(`Kết quả phép tính a + b = ${result}`);
        break;
    case "-":
        result = number1 - number2;
        alert(`Kết quả phép tính a - b = ${result}`);
        break;
    case "*":
        result = number1 * number2;
        alert(`Kết quả phép tính a * b = ${result}`);
        break;
    case "/":
        result = number1 / number2;
        alert(`Kết quả phép tính a / b = ${result}`);
        break;
    default:
        alert("Mời bạn nhập lại phép tính đúng");                
}
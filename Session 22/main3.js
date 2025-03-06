let num = [];
let input = prompt("Mời bạn nhập phần tử: ");
if (isNaN(input)) {
    document.write("Không hợp lệ");
} else {
    num = input.split("");
    document.write(`Số vừa nhập là ${num}` + "<br>");
    num.reverse();
    document.write(`Số đảo ngược là ${num}`); 
}
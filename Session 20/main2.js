let n = +prompt("Mời bạn nhập số có thể chia hết cho 5: ");
let arr = [];
if (n > 0) {
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            arr += i + " ";
        }
    }
    document.write(`Các số chia hết cho 5 từ 1 đến ${n} là : ${arr}` + "<br>");
} else {
    document.write("Dữ liệu nhập vào không hợp lệ");
}
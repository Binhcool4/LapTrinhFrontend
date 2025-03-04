let n = +prompt("Mời bạn nhập số điều kiện");
let total = 0;
if (n > 0) {
    for (let i = 1; i <= n; i++) {
        total = total + i;
    }
    document.write(total);
} else {
    document.write("Dữ liệu nhập vào không hợp lệ");
}
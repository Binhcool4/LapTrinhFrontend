let a = +prompt("Mời bạn nhập giá trị a: ");
let b = +prompt("Mời bạn nhập giá trị b: ");
let total = a;
if (isNaN(a) || isNaN(b)) {
    document.write("Không hợp lệ");
} else {
    for (let i = 0; i <= b; i++) {
        total = total+ i;
    }
    document.write(total);
}
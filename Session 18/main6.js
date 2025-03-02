let year = +prompt("Mời bạn nhập năm bất kì: ");
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    document.write("Đó là năm nhuận!");
} else {
    document.write("Đó là năm không nhuận!");
}
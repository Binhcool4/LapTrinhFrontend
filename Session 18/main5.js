let exp = +prompt("Mời bạn nhập số năm kinh nghiệm: ");
if (exp > 6) {
    document.write("Quản lý");
} else if (exp > 4 && exp <= 6) {
    document.write("Chuyên viên");
} else if (exp > 1 && exp <= 3) {
    document.write("Nhân viên có kinh nghiệm");
} else {
    document.write("Mới vào nghề");
}
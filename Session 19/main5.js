let str = prompt("Mời bạn nhập chuỗi kí tự: ");
if (str.search(" ") == -1) {
    document.write("Chuỗi không chứa dấu cách");
} else {
    document.write("Chuỗi chứa dấu cách");
}
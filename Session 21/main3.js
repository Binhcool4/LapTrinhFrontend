let passWord = "Trieu Quoc Binh";
let answer;
for (let i = 0; i < 100; i++) {
    answer = prompt("Mời bạn nhập mật khẩu: ");
    if (answer === "Trieu Quoc Binh") {
        document.write("Đúng mật khẩu !!" + "<br>");
        break;
    } else {
        document.write("Sai mật khẩu, mời bạn nhập lại !!" + "<br>");
    }
}
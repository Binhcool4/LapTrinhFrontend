let nameUser = prompt("Mời bạn nhập tên người dùng: ");

if (nameUser === "ADMIN") {
    let passWord = prompt("Mời bạn nhập mật khẩu: ");
    if (passWord === "TheMaster") {
        document.write("Welcome");
    } else if (passWord === null) {
        document.write("Cancelled");
    } else {
        document.write("Wrong password");
    }
} else if (nameUser === null) {
    document.write("Cancelled");
} else {
    document.write("I Don't know you");
}

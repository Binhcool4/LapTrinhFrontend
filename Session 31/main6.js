let form = document.getElementById("myForm");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "huanrose@gmail.com" && password === "123456") {
        console.log("Đăng nhập hành công");
    } else {
        console.log("Đăng nhập sai");
    }
});
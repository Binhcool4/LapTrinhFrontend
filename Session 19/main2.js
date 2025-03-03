let str = prompt("Mời bạn nhập một kí tự");
let text;

if (str.length !== 1) {
    document.write("Nhập sai số lượng kí tự.");
} else {
    // /^[a-zA-Z]$/ là một biểu thức chính quy kiểm tra xem ký tự nhập vào có phải là một chữ cái (A-Z hoặc a-z) mà em mới tìm được ở trên mạng
    if (/^[a-zA-Z]$/.test(str)) {
        document.write(`${str} là ký tự`);
    } else {
        document.write(`${str} không phải là ký tự`);
    }
}

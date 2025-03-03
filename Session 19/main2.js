let str = prompt("Mời bạn nhập một kí tự");
let text;

if (str.length !== 1) {
    document.write("Nhập sai số lượng kí tự.");
} else {
    // Kiểm tra xem ký tự có phải là chữ cái hay không
    if (/^[a-zA-Z]$/.test(str)) {
        document.write(`${str} là ký tự`);
    } else {
        document.write(`${str} không phải là ký tự`);
    }
}

let money = +prompt("Nhập số tiền gửi");
let month = +prompt("Nhập số tháng gửi");
const interest_rate = (4.3 / 100);
let interest = money * interest_rate / 12 * month;
let exchange = interest.toLocaleString("vi-Vn");
console.log(`Số tiền lãi: ${exchange} VNĐ`);
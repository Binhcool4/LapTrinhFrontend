let money = +prompt("Mời bạn nhập số tiền gửi: ");
let interest_rate = +prompt("Mời bạn nhập lãi xuất tháng: ");
let month = +prompt("Mời bạn nhập số tháng gửi: ");
for (let i = 1; i <= month; i++) {
    let interest = money * interest_rate / 100 / 12 * i;
    let received = interest + money;
    document.write(`Số tiền lãi tháng ${i} là: ${interest.toLocaleString()} VNĐ` + "<br>");
    document.write(`Số tiền nhận được tháng ${i} là: ${received.toLocaleString()} VNĐ` + "<br>");
    document.write("<br>")
}
let radius = +prompt("Nhập vào bán kính: ");
let height = +prompt("Nhập vào chiều cao: ");
let surrounding_area = 2 * Math.PI * radius * height;
let total_area = surrounding_area + 2 * Math.PI * radius**2;
let volume = Math.PI * radius**2 *height;
let base_circumference = radius* Math.PI;

document.write(`Diện tích xung quanh là: ${surrounding_area.toFixed(2)}` + "<br>");
document.write(`Diện tích toàn phần là: ${total_area.toFixed(2)}` + "<br>");
document.write(`Thể tích hình trụ là: ${volume.toFixed(2)}` + "<br>");
document.write(`Chu vi đáy là: ${base_circumference.toFixed(2)}` + "<br>");
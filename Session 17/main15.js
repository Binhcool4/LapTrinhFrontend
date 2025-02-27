let radius = +prompt("Mời bạn nhập bán kính: ");
const volume = (4/3) * Math.PI * radius**3;
const acreage = 4 * Math.PI * radius**2;
const perimeter = 2 * Math.PI * radius;

document.write(`Thể tích hình cầu là: ${volume.toFixed(2)}` + "<br>");
document.write(`Diện tích bề mặt là: ${acreage.toFixed(2)}` + "<br>");
document.write(`Chu vi lớn nhất của hình cầu là: ${perimeter.toFixed(2)}` + "<br>");
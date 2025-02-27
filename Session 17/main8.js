let date1 = prompt("Nhập ngày đầu tiên (YYYY-MM-DD): ");
let date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD): ");
let d1 = new Date(date1);
let d2 = new Date(date2);
let timeDiff = d2 - d1;
let dayDiff = timeDiff / (1000 * 3600 * 24);
let abs = Math.abs(dayDiff); 
let difference = abs;
alert(`Độ lệch giữa hai ngày là ${difference} ngày`);
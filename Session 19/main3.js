let dollar = +prompt("Mời bạn nhập số tiền dollar: ");
let toVND = dollar * 23000;
document.write(`${dollar} USA bằng ${toVND.toLocaleString()} VNĐ` + "<br>");
let vnd = +prompt("Mời bạn nhập tiền việt");
let toDollar = vnd / 23000;
document.write(`${vnd.toLocaleString()} VNĐ bằng ${toDollar.toFixed(2)} USA`);
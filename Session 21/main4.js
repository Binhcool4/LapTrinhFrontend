let a = +prompt("Mời bạn nhập giá trị a: ");
let b = +prompt("Mời bạn nhập giá trị b: ");
let c = +prompt("Mời bạn nhập giá trị c: ");
let delta = Math.pow(b, 2) - 4 * a * c;
let x1 = (- b + Math.sqrt(delta)) / (2 * a);
let x2 = (- b - Math.sqrt(delta)) / (2 * a);

if (delta < 0) {
    document.write("Phương trình vô nghiệm.");
} else if (delta == 0) {
    let x = -b / (2 * a);
    document.write(`Phương trình có nghiệm kép x1 = x2 = ${x}` + "<br>");
} else {
    document.write(`Phương trình có 2 nghiệm phân biệt: ${x1.toFixed(2)} ; ${x2.toFixed(2)}`)
}
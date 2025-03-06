let num = [];
let input = prompt("Mời bạn nhập phần tử: ");
if (isNaN(input)) {
    document.write("Dãy số không hợp lệ");
} else {
    num = input.split("");
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    document.write(`${max} là số lớn nhất trong dãy!!`);
}
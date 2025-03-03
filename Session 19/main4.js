let num = +prompt("Mời bạn nhập một số ngẫu nhiên: ");
if (num % 3 === 0 && num % 5 ===0) {
    document.write(`Số ${num} chia hết cho cả 3 và 5`);
} else {
    document.write(`Số ${num} không chia hết cho cả 3 và 5`);
}
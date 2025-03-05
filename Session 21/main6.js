let num = +prompt("Mời bạn nhập một số nguyên bất kỳ: ");
let arr = [];
for (let i = 0; i < num; i++) {
    if (num % i === 0) {
        arr += i + ", "; 
    }
}
document.write(`Tất cả các ước của số ${num} là ${arr}`);
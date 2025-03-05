let even = 0;
let odd = 0;
for (let i = 1; i <= 5; i++) {
    let num = +prompt(`Mời bạn nhập vào số nguyên ${i}: `);
    if (num % 2 === 0) {
        even = even + 1;
    } else {
        odd = odd + 1;
    }
}
document.write(`Trong 5 số nguyên đã nhập có ${even} số chắn và ${odd} số lẻ`);
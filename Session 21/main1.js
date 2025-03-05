let total = 0;
for (let i = 1; i<=5; i++){
    let num = +prompt(`Mời bạn nhập vào số nguyên ${i}: `);
    if (num % 2 === 0) {
        continue;
    } else {
        total = total + num; 
    }  
}
document.write(total);
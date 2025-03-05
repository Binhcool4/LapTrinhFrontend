let n = +prompt("Nhập số n: ");
let count = 0;
let num = 2;
while (count < n) {
    let find = 0; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            find = 1;
            break; 
        }
    }
    if (find ===0) {
        document.write(num + "<br>"); 
        count++; 
    }
    num++;
}   
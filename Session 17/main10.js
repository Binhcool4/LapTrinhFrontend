let n = +prompt("Mời bạn nhập số tự nhiên: ");
let i = 0;
let flag = 0;
while(i <= n){
    if (Math.pow(i , 2) == n) {
        document.write(`${n} là số chính phương`);
        flag = 1;
        break;
    }
    i++;
}

if (flag == 0){
    document.write(`${n} không phải là số chính phương`);
}
let arr = [9,2,6,8,5];
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even += arr[i];
    } else {
        odd += arr[i];
    }
    
}
document.write(`Tổng các số chẵn là ${even}` + "<br>");
document.write(`Tổng các số lẻ là ${odd}`);
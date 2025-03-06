let numbers = [2,5,7,4,1,8,6,2,5,7];
let find = +prompt("Mời bạn nhập số cần tìm: ");
let time = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
        time += 1;
    }   
}
document.write(`Số ${find} xuất hiện ${time} lần trong mảng`);
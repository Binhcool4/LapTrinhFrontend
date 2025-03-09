let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt("Mời bạn nhập mảng phẩn tử: ");
}
let max = 0;
let index = 0;
for (let j = 0; j < arr.length; j++) {
    if (arr[j] > max) {
        max = arr[j];
        index = j;
    }    
    
}
document.writeln(`Phần tử lớn nhất là: ${max} tại vị trí: ${index}`);